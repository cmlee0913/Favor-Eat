from contextlib import asynccontextmanager
from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
from bigdata import mysql_conn
from apscheduler.schedulers.background import BackgroundScheduler


class UserNo(BaseModel):
    no: int


def recommend_foods(target, has_evaluations, taste):
    overlapping_matrix = has_evaluations.loc[(has_evaluations.loc[target] * has_evaluations).sum(axis=1) >= 3]
    overlapping_matrix = taste.loc[taste.index.isin(overlapping_matrix.index)]
    if overlapping_matrix.empty:
        return

        # target 행에서 0이 아닌 열 추출
    non_zero_columns_in_target_matrix = overlapping_matrix.loc[:, (overlapping_matrix.loc[target, :] != 0)]

    # target의 열이 0이 아닌 열만 남긴 비슷한 입맛의 사용자 행렬
    similar_taste_users_matrix_without_non_zero = non_zero_columns_in_target_matrix[
        (abs(non_zero_columns_in_target_matrix.loc[target] - non_zero_columns_in_target_matrix) <= 4).sum(
            axis=1) >= 3]

    # 비슷한 입맛의 사용자 행렬
    similar_taste_users_matrix = overlapping_matrix.loc[
        overlapping_matrix.index.isin(similar_taste_users_matrix_without_non_zero.index)]

    # 결과 리스트
    return similar_taste_users_matrix.loc[:,
              (similar_taste_users_matrix.loc[target, :] == 0)].columns.get_level_values('foods_id').to_list()


def content_filter():
    print("content_filter 실행")
    cnx = mysql_conn.connect_mysql()
    cursor = cnx.cursor(dictionary=True)

    query = "DELETE FROM recommends"
    cursor.execute(query)
    cnx.commit()

    query = "SELECT * FROM evaluations"
    cursor.execute(query)
    # 데이터 가져오기
    data = cursor.fetchall()

    # 데이터프레임으로 변환
    evaluations = pd.DataFrame(data)
    evaluations['taste'] = evaluations['spiciness'] + evaluations['sweetness'] + evaluations['saltiness'] \
                           + evaluations['fatness']
    evaluations['hasEvaluations'] = evaluations['taste'].apply(lambda x: 1 if pd.notnull(x) else 0)

    # 사용자-음식 평가 행렬과 사용자-음식 평가존재유무 행렬
    taste = pd.pivot_table(evaluations, index=['no'], columns=['foods_id'], values=['taste'], fill_value=0)
    has_evaluations = pd.pivot_table(evaluations, index=['no'], columns=['foods_id'], values=['hasEvaluations'],
                                     fill_value=0)
    for target in taste.index.to_list():
        results = recommend_foods(target, has_evaluations, taste)

        # 1. 결과 리스트 to_csv 나 to_pickl로 변경 후 DB에 한 번에 저장후 0.8~0.1초보다 얼마나 줄었는 지 확인

        # 2. 전체 target을 변경해주는 전체 for문을 수정하는 방법 찾기 시간 확인
        sql = "INSERT INTO recommends (no, foods_id, recommends_no) VALUES (%s, %s, %s)"
        for foods_id in results:
            cursor.execute(sql, (target, foods_id, 0))

    cnx.commit()

    # 연결 종료
    cursor.close()
    cnx.close()


@asynccontextmanager
async def lifespan(app: FastAPI):
    # 백그라운드 스케줄러 생성
    scheduler = BackgroundScheduler()
    scheduler.start()
    # 매일 3시 30분에 test 메서드 실행
    scheduler.add_job(content_filter, 'cron', hour=3, minute=30)
    yield
    scheduler.shutdown()


# FastAPI 인스턴스 생성
app = FastAPI(lifespan=lifespan)


# API 요청 모델 정의
class PredictionRequest(BaseModel):
    input_data: list


# API 엔드포인트 정의
@app.post('/predict', status_code=200)
async def predict(user_no: UserNo):
    print("predict 실행")
    target = user_no.no

    cnx = mysql_conn.connect_mysql()
    cursor = cnx.cursor(dictionary=True)

    query = "SELECT * FROM evaluations"
    cursor.execute(query)
    # 데이터 가져오기
    data = cursor.fetchall()

    # 데이터프레임으로 변환
    evaluations = pd.DataFrame(data)
    evaluations['taste'] = evaluations['spiciness'] + evaluations['sweetness'] + evaluations['saltiness'] \
                           + evaluations['fatness']
    evaluations['hasEvaluations'] = evaluations['taste'].apply(lambda x: 1 if pd.notnull(x) else 0)

    # 사용자-음식 평가 행렬과 사용자-음식 평가존재유무 행렬
    taste = pd.pivot_table(evaluations, index=['no'], columns=['foods_id'], values=['taste'], fill_value=0)
    has_evaluations = pd.pivot_table(evaluations, index=['no'], columns=['foods_id'], values=['hasEvaluations'],
                                     fill_value=0)

    results = recommend_foods(target, has_evaluations, taste)

    # 1. 결과 리스트 to_csv 나 to_pickl로 변경 후 DB에 한 번에 저장후 0.8~0.1초보다 얼마나 줄었는 지 확인

    # 2. 전체 target을 변경해주는 전체 for문을 수정하는 방법 찾기 시간 확인
    sql = "INSERT INTO recommends (no, foods_id, recommends_no) VALUES (%s, %s, %s)"
    for foods_id in results:
        cursor.execute(sql, (target, foods_id, 0))

    cnx.commit()

    # 연결 종료
    cursor.close()
    cnx.close()

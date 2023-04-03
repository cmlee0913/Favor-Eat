from contextlib import asynccontextmanager
from fastapi import FastAPI
from pydantic import BaseModel
from joblib import load
import pandas as pd
import mysql_conn
from apscheduler.schedulers.background import BackgroundScheduler
global model


def content_filter():
    print("content_filter 실행")
    target = 1
    cnx = mysql_conn.connect_mysql()
    cursor = cnx.cursor(dictionary=True)
    
    query = "DELETE FROM recommends WHERE no = %s"
    cursor.execute(query, [target])
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

    # 겹치는 열이 3개 이상인 행들 모음
    overlapping_matrix = has_evaluations.loc[(has_evaluations.loc[target] * has_evaluations).sum(axis=1) >= 3]
    overlapping_matrix = taste.loc[taste.index.isin(overlapping_matrix.index)]

    # target 행에서 0이 아닌 열 추출
    non_zero_columns_in_target_matrix = overlapping_matrix.loc[:, (overlapping_matrix.loc[target, :] != 0)]

    # target의 열이 0이 아닌 열만 남긴 비슷한 입맛의 사용자 행렬
    similar_taste_users_matrix_without_non_zero = non_zero_columns_in_target_matrix[
        (abs(non_zero_columns_in_target_matrix.loc[target] - non_zero_columns_in_target_matrix) <= 4).sum(axis=1) >= 3]

    # 비슷한 입맛의 사용자 행렬
    similar_taste_users_matrix = overlapping_matrix.loc[
        overlapping_matrix.index.isin(similar_taste_users_matrix_without_non_zero.index)]

    # 결과 리스트
    results = similar_taste_users_matrix.loc[:,
              (similar_taste_users_matrix.loc[target, :] == 0)].columns.get_level_values('foods_id').to_list()

    sql = "INSERT INTO recommends (no, foods_id, recommends_no) VALUES (%s, %s, %s)"
    for foods_id in results:
        cursor.execute(sql, (target, foods_id, 0))

    cnx.commit()

    # 연결 종료
    cursor.close()
    cnx.close()


@asynccontextmanager
async def lifespan(app: FastAPI):
    # 모델을 미리 로드
    global model
    # model = load('model.joblib')
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
@app.post('/predict')
async def predict(request: PredictionRequest):
    global model
    prediction = model.predict([request.input_data])
    return {'prediction': prediction[0]}

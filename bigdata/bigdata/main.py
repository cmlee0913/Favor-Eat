from contextlib import asynccontextmanager
from fastapi import FastAPI
from pydantic import BaseModel
from joblib import load
import mysql_conn
from apscheduler.schedulers.background import BackgroundScheduler

global model


def test():
    global model
    # TODO: 기존 모델의 추가 데이터 학습 적용
    pass


@asynccontextmanager
async def lifespan():
    # 모델을 미리 로드
    global model
    model = load('model.joblib')
    # 백그라운드 스케줄러 생성
    scheduler = BackgroundScheduler()
    scheduler.start()
    # 매일 3시 30분에 test 메서드 실행
    scheduler.add_job(test, 'cron', hour=3, minute=30)
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

from fastapi import FastAPI
from pydantic import BaseModel
from joblib import load

# FastAPI 인스턴스 생성
app = FastAPI()

# API 요청 모델 정의
class PredictionRequest(BaseModel):
    input_data: list

# API 엔드포인트 정의
@app.post('/predict')
async def predict(request: PredictionRequest):
    model = load('model.joblib')
    prediction = model.predict([request.input_data])
    return {'prediction': prediction[0]}

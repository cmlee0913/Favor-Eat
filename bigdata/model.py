from sklearn.linear_model import LinearRegression
from joblib import dump
from mysql_conn import connect_mysql

# MySQL 연결
cnx = connect_mysql()

# SQL 쿼리문 실행
cursor = cnx.cursor()
query = "SELECT * FROM users;"
cursor.execute(query)

# 데이터 가져오기
data = cursor.fetchall()

# 연결 종료
cursor.close()
cnx.close()

# 데이터셋 분리
X = [list(row[1:]) for row in data]
y = [row[0] for row in data]

#
print(X)
print(y)

# 선형 회귀 모델 학습
model = LinearRegression()
model.fit(X, y)

# 모델 저장
dump(model, 'model.joblib')

FROM python:3.9.13

WORKDIR /var/jenkins_home/workspace/Bigdata/bigdata

COPY . .
RUN pip install --no-cache-dir --upgrade -r ./requirements.txt
EXPOSE 6000
CMD ["cd", "bigdata/"]
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "6000"]

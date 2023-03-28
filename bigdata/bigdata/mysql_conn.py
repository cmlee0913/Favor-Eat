import mysql.connector


def connect_mysql():
    cnx = mysql.connector.connect(
        host='j8d108.p.ssafy.io',
        user='ssafy',
        password='ssafy',
        database='Favoreat'
    )

    return cnx

import mysql.connector


def connect_mysql():
    cnx = mysql.connector.connect(
        # host='j8d108.p.ssafy.io',
        host='127.0.0.1',
        port='3306',
        user='ssafy',
        password='qX&=Kg5,efRFSTQ7o',
        database='Favoreat'
    )

    return cnx

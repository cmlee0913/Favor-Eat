import mysql.connector


def connect_mysql():
    cnx = mysql.connector.connect(
        host='j8d108.p.ssafy.io',
        port='3307',
        user='ssafy',
        password='qX&=Kg5,efRFSTQ7o',
        database='Favoreat'
    )

    return cnx

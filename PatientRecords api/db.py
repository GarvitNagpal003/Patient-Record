from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

db_url = "mysql+pymysql://root:Mysql333@localhost/DataEntry"

engine = create_engine(db_url)

local_session = sessionmaker(bind=engine)

Base = declarative_base()


def get_db():
    db = local_session()
    try:
        yield db
    finally:
        db.close()

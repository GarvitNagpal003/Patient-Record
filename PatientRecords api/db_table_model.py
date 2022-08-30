from datetime import datetime, time, timedelta
from email.policy import default
from enum import unique
from operator import index
from sqlite3 import Time
from tokenize import Double, Floatnumber
from db import Base
from sqlalchemy import BigInteger, Integer, Column, String, DateTime, ForeignKey, TIME
from typing import Any, Optional


class user_table(Base):

    __tablename__ = "user_table"

    
    patientname = Column(String(30),primary_key=True, index=True)
    age = Column(Integer)
    gender = Column(String(30), index=True)
    disease = Column(String(14), index=True)
    patient_in_time = Column(Integer)
    patient_out_time = Column(Integer)



from sqlite3 import Time
from xmlrpc.client import DateTime
from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime, time, timedelta
from sqlalchemy import true



class add_user_data(BaseModel):
    patientname: str
    age: int
    gender: str
    disease: str
    patient_in_time: int
    patient_out_time: int


class user_data(add_user_data):
    patientname: str

    class Config:
        orm_mode = True

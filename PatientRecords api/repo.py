from re import S
from sqlite3 import dbapi2
import db_table_model
import schema
from sqlalchemy.orm import Session
from fastapi import HTTPException, status


class users:
    def add_user(db: Session, user_details: schema.add_user_data):
        new_user = db_table_model.user_table(patientname=user_details.patientname, age=user_details.age,
                                             gender=user_details.gender, disease=user_details.disease,
                                             patient_in_time=user_details.patient_in_time, patient_out_time=user_details.patient_out_time)
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        return new_user

    def all_users(db: Session):
        return db.query(db_table_model.user_table).all()

    def user_by_patient(db:Session, patientname:str):
        return db.query(db_table_model.user_table).filter(db_table_model.user_table.patientname == patientname).first()


    def delete_user(db:Session, patientname:str):
         db.query(db_table_model.user_table).filter(db_table_model.user_table.patientname == patientname).delete(synchronize_session=False)
         db.commit()
         return "Done"

    def user_by_patientname(db:Session,patientname:str):
        return db.query(db_table_model.user_table).filter(db_table_model.user_table.patientname == patientname).first()

    def user_update(db:Session,patientname:str,user_data:schema.add_user_data):
        user = db.query(db_table_model.user_table).filter(db_table_model.user_table.patientname ==patientname).update({'patientname':user_data.patientname,
        'age':user_data.age,'gender':user_data.gender,'disease':user_data.disease,'patient_in_time':user_data.patient_in_time,
        'patient_out_time':user_data.patient_out_time},synchronize_session=False)
        db.commit()
        return "Done"
           
     
                                                                                                                
                                                                                                                
                                                                                                                
                                                                                                                
                                                                                                              
                                                                                                               
        


         


    


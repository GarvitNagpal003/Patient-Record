import { Component, Input, OnInit,Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import {FormControl,FormGroup, Validators} from "@angular/forms"
import {GetUsersService} from '../services/get-users.service'
import { UserModel } from '../user/user-model';


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  constructor(private api:GetUsersService) {
    
  }
   

 

  user_details = new FormGroup({
    patientname: new FormControl("",[Validators.required]),
    age: new FormControl(""),
    gender: new FormControl("",[Validators.required]),
    disease: new FormControl("",Validators.required),
    patient_in_time: new FormControl("",[Validators.required]),
    patient_out_time: new FormControl("",[Validators.required])


  })

  @Output() parent_function : EventEmitter<any> = new EventEmitter() 
  @Output() load_data_in_app:EventEmitter<any> = new EventEmitter()
  @Input() user_Details:any


 
  
  
 
  @Input()
  update_check :any 
  
  ngOnInit(): void {
    console.log(this.update_check)
    this.user_details.patchValue({...this.update_check}) 

  }
  
 
   


  get patientname(){
    return this.user_details.get("patientname")
  }
  get age(){
    return this.user_details.get("age")
  }
  get gender(){
    return this.user_details.get("gender")
  }
  get disease(){
    return this.user_details.get("disease")
  }
  get patient_in_time(){
    return this.user_details.get("patient_in_time")
    
  }
  get patient_out_time(){
    return this.user_details.get("patient_out_time")
    
  }

  
  
  table_data(data:any){
    this.api.update_user(this.update_check,data).subscribe((result)=>{
      console.log(result)
      console.log(data)
      console.log(this.update_check)
      this.parent_function.emit(true)
      this.load_data_in_app.emit(true)
      
    })
  }




}



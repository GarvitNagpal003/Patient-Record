import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Employee } from 'src/data_models.ts/employe_Data_Model';
import {GetUsersService} from "../services/get-users.service"

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  add_row :boolean = false    
    // add_row is a checker for enabling the form for adding row if only add_row is true then add_user api will be 
    // called on pressingsubmit 
    // when load btn is pressed then enable_form function will be called addrow  will be changed to true and  update_row will
    // be changed to false 
  update_row :boolean = false  
  update_enable = false // update enable is a value which will be passed to the child component by which the update form will be enabled or disabled

  edit_patientname:any 
  close_form:boolean = false 
user_Details:any

 @Input()
 all_Users:any


constructor(private api:GetUsersService){
}
@Output() load_data_in_app:EventEmitter<any> = new EventEmitter()

 

  ngOnInit(): void {
    
   
  }
enable_form(){ // enabling form function will change the value of add_row to true and update_enable to the false so only api should get called
  this.add_row = true
  this.update_enable =false
}
delete_user(data:string){
  this.api.delete_user(data).subscribe((result)=>{ // when ever a person click on delete_btn on the table of any  row then the contact no. of that 
    this.api.get_user().subscribe((data)=>{
      this.all_Users = data

    });  // will be passed in the delete user function and it will call a api for delete operation
  })

}
enable_update(patientname:string){  // enable update this function is called when a client click on the edit button it will
  this.api.get_data(patientname).subscribe((data)=>{
    this.user_Details=data
    this.add_row =false  // submitting form
    this.update_row = true
    this.close_form =false   
    
  })
  
  
  
  


  // last close form is to closing the form after submitting
  

}
parent_function(check:boolean){ // function which will get the value from child component and change the value of add_row and update_enable 
  this.close_form=check // which will result in hiding the form
  if(check){
    this.add_row = false
    this.update_row = false
  }
}

load_data_from_form(data:boolean){
  this.load_data_in_app.emit(true)
}


}

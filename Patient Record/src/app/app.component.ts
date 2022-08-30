import { Component } from '@angular/core';
import {GetUsersService} from './services/get-users.service'
import {Employee} from '../data_models.ts/employe_Data_Model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PATIENT RECORDS';
  load_data:boolean = false
  users:any
  constructor(private api:GetUsersService){
  }
  get_users(){
    this.api.get_user().subscribe((data)=>{
      this.users = data

    });
  }
  loadData(){
    this.load_data = true
    this.get_users()
    

  }
  load_data_from_child(data:boolean){
    this.loadData()
  }
  ngOnInit(){
    this.loadData()
    console.log(this.users)
  }
  
}

import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model'
@Component({
  selector: 'app-user-registraion',
  templateUrl: './user-registraion.component.html',
  styleUrls: ['./user-registraion.component.css']
})
export class UserRegistraionComponent{

  userobj:User={firstname:"",lastname:"",email:""}
  addUserData(){
    //let userobj=ref.value;
   // console.log(userobj);
   // ref.reset()
   console.log(this.userobj);
   this.userobj={firstname:"",lastname:"",email:""}
  }

}

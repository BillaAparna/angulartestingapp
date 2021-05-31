import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(ref){
    let userLoginObj=ref.value;
    //if username and password are admin then only navigate to admin component
    if(userLoginObj.email!="admin" ||  userLoginObj.password!="admin"){
      alert("invalid credentials");
    }
    else{
      //save the data to localstorage
      localStorage.setItem("username","admin");
      //navigate to admin component
      this.router.navigateByUrl("/admin")
    }

  }

}

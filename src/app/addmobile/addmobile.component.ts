
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { mobile } from '../models/mobile.model';

@Component({
  selector: 'app-addmobile',
  templateUrl: './addmobile.component.html',
  styleUrls: ['./addmobile.component.css']
})
export class AddmobileComponent implements OnInit {

  constructor(private dsObj:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  mobileModel=new mobile('','','');
  OnSubmitNewMobile(){
    //console.log(this.mobileModel)
    this.dsObj.createNewMobile(this.mobileModel).subscribe(
      data=>{
        //navigate to view mboiles component
        this.router.navigateByUrl("products/mobiles");
      },
      err=>{
        console.log("error occuured in addmobile",err);
      }
    )
  }

}

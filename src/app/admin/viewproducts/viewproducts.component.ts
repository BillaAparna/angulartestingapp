import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { MobilesComponent } from 'src/app/mobiles/mobiles.component';
import { mobile } from 'src/app/models/mobile.model';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  mobiles:Product[]=[];
  editMobileIndex;
  editMobileObj=new mobile('','','');
  editMobileStatus:boolean=false;
  //inject object of DataService class
  constructor(private dsobj:DataService){
  }
  ngOnInit(){
    this.getusers();
    
  }
  getusers(){
    this.dsobj.getmobilesdata().subscribe(data=>{
      this.mobiles=data;
      console.log(this.mobiles)
    },
      err=>{
      console.log(err)
    }
    )
  }
  //to edit mobile

  editMobile(mbobj,ind){
    this.editMobileObj=mbobj;
    this.editMobileIndex=ind;
    this.editMobileStatus=true;

  }

  //save mobile data to json
  saveMobile(modifiedMobileObj){
    this.editMobileStatus=false;
    //console.log(modifiedMobileObj);
    modifiedMobileObj.id=this.editMobileObj["id"];
    modifiedMobileObj.productImage=this.editMobileObj["productImage"];
    this.dsobj.updateMobile(modifiedMobileObj).subscribe(
      data=>{
        console.log(modifiedMobileObj);
      },
      err=>{
        console.log("error occuered in viewproducts");
      }
    )

  
  }
  delMobile(mbobj){
    this.dsobj.deleteMobile(mbobj.id).subscribe(data=>{
      this.getusers();
    },
    err=>{
      console.log("error in delete");
    })
  }
  //save data to json



}

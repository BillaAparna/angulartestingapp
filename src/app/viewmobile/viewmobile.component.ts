import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-viewmobile',
  templateUrl: './viewmobile.component.html',
  styleUrls: ['./viewmobile.component.css']
})
export class ViewmobileComponent implements OnInit {

  mobiles:Product[]=[];
  searchItem:string;
  //mobiles=new Observable<Product[]>();
  //inject object of DataService class
  constructor(private dsobj:DataService){
  }
ngOnInit(){

    this.dsobj.getmobilesdata()
    .subscribe(
      data=>{
      this.mobiles=data;
      console.log(this.mobiles)
    },
      err=>{
      console.log(err)
    }
    )

}
}
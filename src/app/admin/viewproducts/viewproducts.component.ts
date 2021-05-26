import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  mobiles:Product[]=[];
  //inject object of DataService class
  constructor(private dsobj:DataService){
  }
  ngOnInit(){
    this.dsobj.getmobilesdata().subscribe(data=>{
      this.mobiles=data;
      console.log(this.mobiles)
    },
      err=>{
      console.log(err)
    }
    )
  }

}

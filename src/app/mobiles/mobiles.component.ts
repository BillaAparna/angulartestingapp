import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  mobiles:Product[]=[];
  //inject object of DataService class
  constructor(private dsobj:DataService){
  }
  ngOnInit(){
    this.mobiles=this.dsobj.getmobilesdata();
  }
   /*name:string="contact here";
   titles=[]
   count=0;
   getdata(data){
     this.titles.push(data);
     this.count++;
   }
 */
 }

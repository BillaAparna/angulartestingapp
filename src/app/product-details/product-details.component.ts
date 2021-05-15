import { Component, Input, EventEmitter, Output } from '@angular/core';
import {Product} from '../models/product.model';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

  @Input() productobj:Product;
  //create custom inout
  @Output() myEvent=new EventEmitter();
  senddata(title){
    this.myEvent.emit(title);
  }
}

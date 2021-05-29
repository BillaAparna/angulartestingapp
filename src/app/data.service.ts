import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  //inject HttpClient service object
  constructor(private hc:HttpClient) { }
    //to read all mobiles data
   getmobilesdata():Observable<Product[]>{
     return this.hc.get<Product[]>("http://localhost:3000/mobiles");
   }
   //to save/create new mobile
   createNewMobile(mobileObj):Observable<any>{
     return this.hc.post<any>("http://localhost:3000/mobiles",mobileObj);
   }
   updateMobile(modifiedMobileObj):Observable<any>{
     return this.hc.put("http://localhost:3000/mobiles/"+modifiedMobileObj.id,modifiedMobileObj)
   }
  }



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  data:any;
  //returns data
  getdata(){
    return this.data;
  }
  //gets the data
  setdata(value){
      this.data=value;
  }
}

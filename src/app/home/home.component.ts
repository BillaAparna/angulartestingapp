import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tsobj:TestService) { }
  n:number=100;
  x:number=0.12;
  today=new Date();
  ngOnInit(): void {
    this.tsobj.setdata(this.n);
  }

}

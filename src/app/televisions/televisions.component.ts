import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit {

  constructor(private tsobj:TestService) { }
num:number;
  ngOnInit(): void {
    this.num=this.tsobj.getdata();
  }

}


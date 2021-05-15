import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-displayname',
  templateUrl: './displayname.component.html',
  styleUrls: ['./displayname.component.css']
})
export class DisplaynameComponent{

  @Input() myname:string ;

}

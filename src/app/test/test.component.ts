import { Component, OnDestroy, OnInit } from '@angular/core';
import { FakedataService } from '../fakedata.service';
import {Post} from '../models/posts.model';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit,OnDestroy {
//inject fake dat service object
  constructor(private fs:FakedataService) { }
myPosts:Post[]=[];
mysubscription:any;
  ngOnInit(): void {
    this.mysubscription=this.fs.getPosts().subscribe(
      postData=>{
        //assign posts
        this.myPosts=postData;
        console.log(this.myPosts)
      },
      err=>{
        console.log("error");
      }
    )
  }
  ngOnDestroy(){
    this.mysubscription.unsubscribe();
  }
  

}

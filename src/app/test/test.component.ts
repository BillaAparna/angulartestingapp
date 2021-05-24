import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakedataService } from '../fakedata.service';
import {Post} from '../models/posts.model';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit,OnDestroy {
//inject fake dat service object
  constructor(private fs:FakedataService,private router:Router) { }
myPosts:Post[]=[];
mysubscription:any;
  ngOnInit(): void {
    this.mysubscription=this.fs.getPosts().subscribe(
      postData=>{
        //assign posts
        console.log(this.myPosts)
        this.myPosts=postData;
      },
      err=>{
        console.log("error");
      }
    )
  }
  onSelectId(id){
    this.router.navigateByUrl('test/'+id)
  }
  ngOnDestroy(){
    this.mysubscription.unsubscribe();
  }


}

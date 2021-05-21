import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../app/models/posts.model';
@Injectable({
  providedIn: 'root'
})
export class FakedataService {
//inject http client object
  constructor(private hc:HttpClient) { }
getPosts():Observable<Post[]>{
return this.hc.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
}
}
import { Injectable } from '@angular/core';

import {Http,Response,Headers } from '@angular/http'
import "rxjs/add/operator/map"
import {Observable} from "rxjs/Observable"

@Injectable()
export class PostListService {

  private url:string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: Http) { }

  getPost(){
    return this.http.get(this.url).map(res => res.json);
  }

}

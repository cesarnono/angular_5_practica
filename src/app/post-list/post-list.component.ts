import { Component, OnInit } from '@angular/core';

import {PostListService} from './post-list.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostListService]
})
export class PostListComponent implements OnInit {
  public posts;
  constructor(private postListService: PostListService) { 
    this.postListService.getPost().subscribe(
      result => {
        this.posts = result;
        console.log(this.posts);
      },
      error =>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}

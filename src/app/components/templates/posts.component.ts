import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Post} from "../../models/post";

@Component({
  selector: 'app-posts',
  template: `
    <div class="row">

        <!--Card-->
        <div class="card card-cascade narrower card-ecommerce col-md-3 card-right"  *ngFor="let post of posts">
          <a routerLink="{{post.id}}">
          <!--Card content-->
          <div class="card-body card-body-cascade text-center no-padding">
            <!--Category & Title-->

            <h5 class="card-title">
              <strong>{{post.title}}</strong>
            </h5>

            <!--Description-->
            <p class="card-text">{{post.body}}</p>

            <!--Card footer-->
          </div>
          </a>
          <!--Card content-->
        </div>
      <!--Card-->

    </div>
  `,
  styles: [`
    .row {
      margin-top: 70px;
    }
  `]
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getData('/posts').subscribe((res) => {
        console.log(res);
        this.posts = res;
      },
      error => {
        console.log(error.message);
      });
  }

}

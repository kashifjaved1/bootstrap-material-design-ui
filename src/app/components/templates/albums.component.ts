import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Album} from "../../models/album";

@Component({
  selector: 'app-albums',
  template: `
    <div class="row">

      <!--Card-->
      <div class="card card-cascade narrower card-ecommerce col-md-3 card-right"  *ngFor="let album of albums">

        <!--Card content-->
        <div class="card-body card-body-cascade text-center no-padding">
          <!--Category & Title-->

          <p class="card-text">
            <img src="../../../assets/img/album.png" class="img">
            <strong class="color">{{album.title}}</strong>
          </p>

          <!--Card footer-->
        </div>
        <!--Card content-->
      </div>
      <!--Card-->

    </div>
  `,
  styles: [`
    .img {
      width: 30px;
    }

    .color {
      color: #007bff;
    }

    .row {
      margin-top: 70px;
    }
  `]
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getData('/posts').subscribe((res) => {
        this.albums = res;
      },
      error => {
        console.log(error.message);
      });
  }

}

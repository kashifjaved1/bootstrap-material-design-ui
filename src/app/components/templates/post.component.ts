import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {Post} from "../../models/post";


@Component({
  selector: 'app-post',
  template: `
    <main>

      <div class="container">

        <!--Section: Blog v.4-->
        <section class="section mt-5 pb-3 wow fadeIn">

          <!--Grid row-->
          <div class="row">
            <div class="col-md-12">
              <!-- Card -->
              <div class="card card-cascade wider reverse">

                <!--Post data-->
                <div class="card-body card-body-cascade text-center">
                  <h2><a><strong>{{post.title}}</strong></a></h2>
                </div>
                <!--Post data-->
                <div class="view view-cascade overlay">
                  <!--Excerpt-->
                  <div class="excerpt wow fadeIn" data-wow-delay="0.3s">
                    <p class="text-center">{{post.body}}</p>
                  </div>
                </div>
              </div>
            </div>
            <!--Grid row-->
          </div>
        </section>
        <!--Section: Blog v.4-->

      </div>

    </main>
  `,
  styles: [`
    .container {
      margin-top: 60px;
    }

    .view {
      margin-top: -55px;
    }

    .wow {
      margin-top: 90px;
    }
  `]
})
export class PostComponent implements OnInit {

  public post: Post;

  constructor(private  route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.apiService.getDataById('/posts/', param.id).subscribe((res) => {
        this.post = res;
      });
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {Todo} from "../../models/todo";

@Component({
  selector: 'app-todo',
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
                  <h2><a><strong>{{todo.id}}</strong></a></h2>
                </div>
                <!--Post data-->
                <div class="view view-cascade overlay">
                  <!--Excerpt-->
                  <div class="excerpt wow fadeIn" data-wow-delay="0.3s">
                    <p class="text-center">{{todo.title + ', Completed: ' + todo.completed}}</p>
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
export class TodoComponent implements OnInit {

  public todo: Todo;

  constructor(private  route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.apiService.getDataById('/todos/', param.id).subscribe((res) => {
        this.todo = res;
      });
    });
  }

}

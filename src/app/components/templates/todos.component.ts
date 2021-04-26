import { Component, OnInit } from '@angular/core';
import {Todo} from "../../models/todo";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-todos',
  template: `
    <table class="table container table-hover">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Status</th>
      </tr>
      </thead>
      <tbody>
        <tr *ngFor="let todo of todos">
          <th scope="row">{{todo.id}}</th>
          <td><a routerLink="{{todo.id}}">{{todo.title}}</a></td>
          <td>{{todo.completed}}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    table {
      margin-top: 70px;
    }
  `]
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData('/todos').subscribe((res) => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].completed === false) {
            res[i].completed = 'Not Completed';
          } else {
            res[i].completed = 'Completed';
          }
        }
        this.todos = res;
      },
      error => {
        console.log(error.message);
      });
  }

}

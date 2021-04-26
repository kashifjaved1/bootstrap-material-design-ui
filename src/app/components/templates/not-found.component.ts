import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-not-found',
  template: `
    <h1 fxLayout="column" fxLayoutAlign="center center" fxFill="10" class="error_display">
      Error: 404 - Not Found
      <div class="auth_btns">
        <button mat-button color="primary" (click)="goTo('signup')">Signup</button> <button mat-button color="primary" (click)="goTo('login')">Login</button>
      </div>
    </h1>
  `,
  styles: [`

    .error_display{
      padding-top: 3%;
      color: darkred;
      font-size: 100px;
    }

    button{
      float: right;
    }

    .auth_btns {
      margin-right: 2%;
    }

  `]
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo(routeName: string): void {
    this.router.navigate([routeName]);
  }

}

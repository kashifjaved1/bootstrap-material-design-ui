import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthUtils} from "../../utils/auth-utils";

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
      <div class="container">
        <a class="navbar-brand" href="#">
          <strong>Material Design Bootstrap</strong>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7"
                aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent-7">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="posts">Posts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="albums">Albums</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="todos">Todos</a>
            </li>
          </ul>
          <a (click)="logout()"><span class="a-link">Logout</span></a>
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .a-link {
      text-decoration: none;
      color: white;
    }
  `]
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['home/posts']);
  }

  logout(): void {
    AuthUtils.delAuth();
    this.router.navigateByUrl('');
  }

}

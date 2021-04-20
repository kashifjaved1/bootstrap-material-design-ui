import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/templates/login.component";
import {SignupComponent} from "./components/templates/signup.component";
import {NavbarComponent} from "./components/templates/navbar.component";
import {PostsComponent} from "./components/templates/posts.component";
import {AlbumsComponent} from "./components/templates/albums.component";
import {TodosComponent} from "./components/templates/todos.component";
import {AuthGuard} from "./guards/auth.guard";
import {AnonGuard} from "./guards/anon.guard";

const routes: Routes = [
  {
    path: '',
    canActivate: [AnonGuard],
    component: LoginComponent
  },
  {
    path: 'signup',
    canActivate: [AnonGuard],
    component: SignupComponent
  },
  {
    path: 'home',
    component: NavbarComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'albums',
        component: AlbumsComponent
      },
      {
        path: 'todos',
        component: TodosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

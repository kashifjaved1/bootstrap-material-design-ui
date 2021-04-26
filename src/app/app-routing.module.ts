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
import {PostComponent} from "./components/templates/post.component";
import {NotFoundComponent} from "./components/templates/not-found.component";
import {AlbumComponent} from "./components/templates/album.component";
import {TodoComponent} from "./components/templates/todo.component";

const routes: Routes = [
  {
    path: '',
    canActivate: [AnonGuard],
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  },
  {
    path: 'home',
    component: NavbarComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: PostsComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'posts/:id',
        component: PostComponent
      },
      {
        path: 'albums',
        component: AlbumsComponent
      },
      {
        path: 'albums/:id',
        component: AlbumComponent
      },
      {
        path: 'todos',
        component: TodosComponent
      },
      {
        path: 'todos/:id',
        component: TodoComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

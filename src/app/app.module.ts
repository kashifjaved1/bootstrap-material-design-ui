import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/templates/login.component';
import { SignupComponent } from './components/templates/signup.component';
import { NavbarComponent } from './components/templates/navbar.component';
import { PostsComponent } from './components/templates/posts.component';
import {HttpClientModule} from "@angular/common/http";
import { AlbumsComponent } from './components/templates/albums.component';
import { TodosComponent } from './components/templates/todos.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { PostComponent } from './components/templates/post.component';
import {MatButtonModule} from "@angular/material/button";
import { AlbumComponent } from './components/templates/album.component';
import { TodoComponent } from './components/templates/todo.component';
import { NotFoundComponent } from './components/templates/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    PostsComponent,
    AlbumsComponent,
    TodosComponent,
    PostComponent,
    AlbumComponent,
    TodoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

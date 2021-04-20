import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthUtils} from "../../utils/auth-utils";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-login',
  template: `
    <header>
      <!--Intro Section-->
      <section class="view intro-2">
        <div class="mask rgba-stylish-strong h-100 d-flex justify-content-center align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto mt-lg-5">

                <!--Form with header-->
                <div class="card wow fadeIn" data-wow-delay="0.3s">
                  <div class="card-body">

                    <!--Header-->
                    <div class="form-header purple-gradient">
                      <h3><i class="fas fa-user mt-2 mb-2"></i> Log in</h3>
                    </div>

                    <!--Body-->
                    <form class="login-form" (ngSubmit)="logIn()" [formGroup]="this.logInForm">
                    <div class="md-form">
                      <i class="fas fa-envelope prefix white-text"></i>
                      <input type="text" formControlName="email" id="orangeForm-email" class="form-control">
                      <label for="orangeForm-email">Your email</label>
                    </div>

                    <div class="md-form">
                      <i class="fas fa-lock prefix white-text"></i>
                      <input type="password" formControlName="password" id="orangeForm-pass" class="form-control">
                      <label for="orangeForm-pass">Your password</label>
                    </div>

                    <div class="text-center">
                      <button class="btn purple-gradient btn-lg">Login</button>
                      <hr>
                      <div class="ul-color inline-ul text-center d-flex justify-content-center">
                        <pre><strong>Not Registered? Signup <a class="a-color" routerLink="signup">here</a></strong></pre>.
                      </div>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  `,
  styles: [`
    pre {
      color: white;
    }

    .a-color {
      color: #f36fc9;
    }
  `]
})
export class LoginComponent implements OnInit {

  logInForm: FormGroup;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {

    this.logInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  logIn(): void {
    if (this.logInForm.valid && this.logInForm.value !== null) {
      this.apiService.login('/login', this.logInForm.value).subscribe((res) => {
        if (res) {
          console.log(res);
          AuthUtils.setAuth(res.token);
          this.router.navigateByUrl('home');
          //this.router.navigate(['index'], {queryParams: {id: res.id}});
        }
      }, error => {
        console.log(error);
        this.snackBar.open(error.message, 'X', {duration: 2000});
      });
    }
    else{
      this.snackBar.open('Email or Password or both are wrong', '', {duration: 2000});
    }

  }

}

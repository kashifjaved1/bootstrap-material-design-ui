import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthUtils} from "../utils/auth-utils";

@Injectable({
  providedIn: "root"
})
export class AnonGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(): any {
    //debugger;
    if (AuthUtils.getAuth() == null) {
      return true;
    } else {
      this.router.navigate(['home']);
    }
  }

}

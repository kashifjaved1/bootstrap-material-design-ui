import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {AuthUtils} from "../utils/auth-utils";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private router: Router;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    if (AuthUtils.getAuth()){
      return true;
    }
    return false;
  }

}

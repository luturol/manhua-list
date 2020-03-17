import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    debugger;
    let token = localStorage.getItem('token');
    let expirationDate = localStorage.getItem('expiration_date');
    if(token && expirationDate && moment(expirationDate, 'DD/MM/YYYY HH:mm:SS') > moment()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}

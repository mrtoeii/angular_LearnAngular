import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenService } from './authen.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(
    private service: AuthenService,
    private router: Router
  ){

  }

  canActivate() {
    let isAuthen = this.service.isAuthen()
    if(!isAuthen){
      this.router.navigate(['notfound'])
    }
    return isAuthen;
  }
  
}

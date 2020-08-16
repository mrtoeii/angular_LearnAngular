import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, RouterState } from '@angular/router';
import { Observable } from 'rxjs';
import { Child5Component } from './child5/child5.component';
import { AuthenService } from './authen.service';

@Injectable()
export class CanDeactiveGuard implements CanDeactivate<Child5Component> {
  router: any;
  constructor(
    private service: AuthenService,
  ){

  }
  canDeactivate(
    component: Child5Component, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      let isAuthen = this.service.isAuthen()
      if(isAuthen){
        return window.confirm('You have to logout before?')
      }
      return !isAuthen;
  }

}

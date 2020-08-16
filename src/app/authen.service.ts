import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor() { }

  isAuthen(){
    let currentState = localStorage.getItem('isRouteActived')
    if(currentState=="true"){
      return true
    }else{
      return false
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-router';

  constructor(
    private router: Router,
    private location: Location,
  ) { 
    localStorage.setItem('isRouteActived','false')
  }

  goChild1() {
    this.router.navigate(['/child1'])
  }

  goChild2() {
    this.router.navigate(['/child2'])
    localStorage.setItem('isRouteActived','false')
  }

  goChild3() {
    // this.router.navigate(['/child3'])
    this.router.navigate(
      ['/child3'],
      {
        queryParams: 
        {
          username: "arkkarachat",
          password: "1234"
        }
      }
    )
    localStorage.setItem('isRouteActived','true')
  }
  goChild4() {
    this.router.navigate(['/child4','Mrtoeii','4321'])
  }

  backpage() {
    this.location.back()
  }

  logIn(){
    localStorage.setItem('isRouteActived','true')
  }

  logOut(){
    localStorage.setItem('isRouteActived','false')
  }
} 
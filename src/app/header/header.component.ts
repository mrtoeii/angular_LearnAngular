import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output("toggle") navToggle = new EventEmitter()
  @Output() sayHi = new EventEmitter<String>()

  demoMailNoti = 50
  demoNoti = 9
  imageURL = 'https://angular.io/assets/images/logos/angular/angular.png'
  constructor() { }

  ngOnInit(): void {
  }

  onClickNavToggle(){
    this.navToggle.emit()
    this.sayHi.emit("Arkkarachat.S")
  }


}

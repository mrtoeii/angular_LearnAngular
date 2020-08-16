import { Component, ViewChild } from '@angular/core';
import { Com1Component } from './components/com1/com1.component';
import { Com2Component } from './components/com2/com2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Component Commucation';
  count = 0

  @ViewChild("c1") c1: Com1Component 
  @ViewChild("c2") c2: Com2Component 

  onClickCount(){
    this.count += 1
  }

  onCom1Rest(value){
    this.count = value
  }

  onClickRun3(){
    this.c1.count = 99
    this.c2.count = 11
  }
}

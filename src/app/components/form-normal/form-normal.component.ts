import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-normal',
  templateUrl: './form-normal.component.html',
  styleUrls: ['./form-normal.component.css']
})
export class FormNormalComponent implements OnInit {

  mRegister: RegisterModel =  new RegisterModel()
  debug: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
   this.debug = JSON.stringify(this.mRegister)
  }
}

class RegisterModel{
  firstname: string
  lastname: string
  email: string
  password: string
}
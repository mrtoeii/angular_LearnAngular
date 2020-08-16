import { Component } from '@angular/core';
import { WebapiService } from './webapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-service';
  mProducts: any[] = []
  constructor(
    private service: WebapiService
  ){
    this.title = this.service.getDummy()
  }

  onClickLoad(){
    this.service.feetData().then(result =>{
      this.mProducts = result
    })
  }
}

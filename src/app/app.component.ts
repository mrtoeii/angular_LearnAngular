import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearnAngular';
  name: String = 'Arkkarachat Siribout'
  position = ['Admin','HR','IT']
  imageURL = 'https://fbi.dek-d.com/27/0486/8762/123590521'

  setName(){
    this.name = 'Mrtoeii'
  }
  onSayHi(text: String){
    // alert(text)
  }
}

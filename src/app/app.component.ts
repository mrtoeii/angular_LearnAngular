import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-angular';

   mUername = "Codemobiles.com"
   mPassword = "1234"
   mColor = "#FF0000"
   mFontSize = "40px;"

   @Input() myMsg: string

   
   
   onClickRest(){
    //  console.log(this.myMsg);
     
     this.myMsg=""
   }

}

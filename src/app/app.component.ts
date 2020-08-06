import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher }  from '@angular/cdk/layout'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  imageURL = 'https://fbi.dek-d.com/27/0486/8762/123590521'
  mobileQueryMax: MediaQueryList

  private _mobileQueryListener: ()=> void

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this._mobileQueryListener = () => changeDetectorRef.detectChanges()
    this.mobileQueryMax = media.matchMedia('(max-width: 600px)')
    this.mobileQueryMax.addListener(this._mobileQueryListener)
  }
  ngOnDestroy(): void {
    this.mobileQueryMax.removeListener(this._mobileQueryListener)
  }

  onSayHi(text: String){
    // alert(text)
  }
}

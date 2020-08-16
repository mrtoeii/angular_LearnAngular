import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  

  private overlayRef: OverlayRef = this.createOverlay();
  private templatePortal: TemplatePortal<any>;
  constructor(
    private overlay: Overlay
  ) { }

  private createOverlay(): OverlayRef {
    return this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position()
      .global()
      .centerVertically()
      .centerHorizontally()
    })
  }

  showSpinner(){
    this.overlayRef.attach(this.templatePortal)
  }

  private hidSpinner(){
    this.overlayRef.detach()
  }

  attach(templatePortalContent: TemplateRef<any>,viewContainerRef: ViewContainerRef){
    this.templatePortal = new TemplatePortal(templatePortalContent, viewContainerRef)

  }
}

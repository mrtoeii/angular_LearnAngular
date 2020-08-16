import { Component, OnInit, Input, ViewChild, TemplateRef, ViewContainerRef, AfterViewInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { LoadingService } from 'src/app/services/loading.service'
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit, AfterViewInit {

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;

  constructor(
    private loadingService: LoadingService,
    private _viewContainerRef: ViewContainerRef
  ) { }

  @Input() color: ThemePalette;
  @Input() strokeWidth: number;
  @Input() diameter: number = 100;
  @Input() mode: ProgressSpinnerMode;
  @Input() value: number;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.loadingService.attach(this.templatePortalContent, this._viewContainerRef)
  }
}

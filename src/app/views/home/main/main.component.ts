import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.popupComponent.open();
  }

  ngOnDestroy(): void { }

  test() { }

}

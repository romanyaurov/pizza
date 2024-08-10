import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input() title: string = '';

  constructor() { }

  public toUpper() {
    return this.title.toUpperCase();
  }

  protected toLower() {
    return this.title.toLowerCase();
  }

}

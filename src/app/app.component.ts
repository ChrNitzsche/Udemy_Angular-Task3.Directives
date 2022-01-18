import { Component, Output } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  clickEvents: number[] = [];
  showText: boolean = false;

  handleButtonClick() {
    this.showText = !this.showText;
    this.clickEvents.push(Date.now());
  }

  handleDeleteArray() {
    this.clickEvents = [];
    this.showText = false;
  }

  liStyle(index: number) {
    if (index >= 20) return { 'background-color': 'darkblue' };
    if (index >= 10) return { 'background-color': 'royalblue' };
    if (index >= 5) return { 'background-color': 'cornflowerblue' };
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ninesquare';
  a = 2;
  b = 3;
  ready = false;
  name = '';

  constructor () {
    setTimeout (() => {
      this.ready = true;
    }, 3000);
  }

  showMessage() {
    alert('Hello');
  }
}

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
  lat = 20.6118227;
  lng = -103.4108922;
  places: any = [
    {active: true, name: 'Flowers House'},
    {active: true, name: 'Kryspy Kreme'},
    {active: false, name: 'Swagger Petstore'},
  ];

  constructor () {
    setTimeout (() => {
      this.ready = true;
    }, 3000);
  }

  showMessage() {
    alert('Hello');
  }
}

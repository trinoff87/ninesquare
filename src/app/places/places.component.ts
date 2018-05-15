import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  lat = 20.6118227;
  lng = -103.4108922;
  places: any = [
    {id: 1, pllatan: 'paid', nearness: 1, distance: 1, active: true, name: 'Flowers House'},
    {id: 2, plan: 'free', nearness: 2, distance: 5.3, active: true, name: 'Kryspy Kreme'},
    {id: 3, plan: 'paid', nearness: 3, distance: 8.7, active: false, name: 'Swagger Petstore'},
  ];

  constructor() { }

  ngOnInit() {
  }

}

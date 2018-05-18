import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ENGINE_METHOD_DIGESTS } from 'constants';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  places: any = [
    {description: 'This is a flowers place', id: 1, pllatan: 'paid', nearness: 1, distance: 1, active: true, name: 'Flowers House'},
    {description: 'This is a donut place', id: 2, plan: 'free', nearness: 2, distance: 5.3, active: true, name: 'Kryspy Kreme'},
    {description: 'This is a pet place', id: 3, plan: 'paid', nearness: 3, distance: 8.7, active: false, name: 'Swagger Petstore'},
  ];

  id = null;
  place = {};

  constructor(private route: ActivatedRoute) { 
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.queryParams);
    console.log(this.route.snapshot.queryParams['action']);
    console.log(this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    console.log(this.findPlace());
    this.place = this.findPlace();
  }

  ngOnInit() {
  }

  findPlace() {
    return this.places.find(place =>
      Number(place.id) === Number(this.id)
    ) || null;
  }

}

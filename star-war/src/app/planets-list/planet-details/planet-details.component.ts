import { Component, OnInit } from '@angular/core';
let i=20;
@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {

  src:any;
  details:any;
  constructor() { }

  ngOnInit(): void {
    this.src='https://source.unsplash.com/random/?planets/' + i++;

    this.details = JSON.parse(localStorage.getItem('planet') as any);
  }

}

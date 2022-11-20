import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {

  details:any;
  constructor() { }

  ngOnInit(): void {
    this.details = JSON.parse(localStorage.getItem('planet') as any);
  }

}

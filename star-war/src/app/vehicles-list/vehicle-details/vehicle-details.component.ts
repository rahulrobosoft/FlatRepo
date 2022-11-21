import { Component, OnInit } from '@angular/core';
let i=80;
@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  src='';
  details:any;
  constructor() { }

  ngOnInit(): void {
    this.src='https://source.unsplash.com/random/?3d-renders' + i++;
    this.details = JSON.parse(localStorage.getItem('vehicle')as any);
  }

}

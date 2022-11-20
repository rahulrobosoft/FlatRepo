import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  details:any;
  constructor() { }

  ngOnInit(): void {
    this.details = JSON.parse(localStorage.getItem('vehicle')as any);
  }

}

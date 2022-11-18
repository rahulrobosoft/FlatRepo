import { Component, OnInit } from '@angular/core';
import { StarwarService } from '../service/starwar.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  details:any;
  url = 'https://swapi.dev/api/vehicles';
  constructor(private sw : StarwarService) { }

  ngOnInit(): void {
    this.sw.getVehicles(this.url).subscribe(data => this.details = data)
  }

  detail_display(index:number){

  }

  previous(){
    this.sw.getSpecies(this.details.previous).subscribe(data => {
      this.details = data;
    })
  }

  next(){
    this.sw.getSpecies(this.details.next).subscribe(data => {
      this.details = data;
    })
  }

}

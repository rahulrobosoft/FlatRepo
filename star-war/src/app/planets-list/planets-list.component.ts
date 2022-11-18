import { Component, OnInit } from '@angular/core';
import { StarwarService } from '../service/starwar.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  details:any
  url='https://swapi.dev/api/planets';
  constructor(private sw : StarwarService) { }

  ngOnInit(): void {
    this.sw.getPlanets(this.url).subscribe(data => {
      this.details = data;
    })
  }

  detail_display(index:number){

  }

  previous(){
    this.sw.getPlanets(this.details.previous).subscribe(data => {
      this.details = data;
    })
  }

  next(){
    this.sw.getPlanets(this.details.next).subscribe(data => {
      this.details = data;
    })
  }

}

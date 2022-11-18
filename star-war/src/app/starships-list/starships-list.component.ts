import { Component, OnInit } from '@angular/core';
import { StarwarService } from '../service/starwar.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  details:any;
  url='https://swapi.dev/api/starships';
  constructor(private sw : StarwarService) { }

  ngOnInit(): void {
    this.sw.getStarships(this.url).subscribe(data => {
      this.details = data;
    })
  }

  detail_display(index:number){

  }

  previous(){
    this.sw.getSpecies(this.details?.previous).subscribe(data => {
      this.details = data;
    })
  }

  next(){
    this.sw.getSpecies(this.details?.next).subscribe(data => {
      this.details = data;
    })
  }

}

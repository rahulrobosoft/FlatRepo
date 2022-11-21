import { Component, OnInit } from '@angular/core';
let i=40;
@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.css']
})
export class SpeciesDetailsComponent implements OnInit {

  src:any;
  details:any;
  constructor() { }

  ngOnInit(): void {
    this.src='https://source.unsplash.com/random/' + i++;
    this.details = JSON.parse(localStorage.getItem('species') as any)
  }

}

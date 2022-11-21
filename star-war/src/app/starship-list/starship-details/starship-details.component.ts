import { Component, OnInit } from '@angular/core';
let i=60;
@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent implements OnInit {

  src:any;
  details:any;
  constructor() { }

  ngOnInit(): void {
    this.src='https://source.unsplash.com/random/?3d-renders/' + i++;
    this.details = JSON.parse(localStorage.getItem('starship')as any);
  }

}

import { Component, OnInit } from '@angular/core';
let i=0;
@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  src:any;
  details:any;
  constructor() { }

  ngOnInit(): void {
    this.src='https://source.unsplash.com/random/?film/' + i++;
    this.details = JSON.parse(localStorage.getItem('film')as any);
  }

}

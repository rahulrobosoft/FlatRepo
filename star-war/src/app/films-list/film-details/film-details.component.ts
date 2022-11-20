import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  details:any;
  constructor() { }

  ngOnInit(): void {
    this.details = JSON.parse(localStorage.getItem('film')as any);
  }

}

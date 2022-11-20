import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent implements OnInit {

  details:any;
  constructor() { }

  ngOnInit(): void {
    this.details = JSON.parse(localStorage.getItem('starship')as any);
  }

}

import { Component, OnInit } from '@angular/core';
import { StarwarService } from '../service/starwar.service';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.css']
})
export class CharactersDetailComponent implements OnInit {

  details:any;
  homeWorld:any;
  constructor(private sw : StarwarService) { }

  ngOnInit(): void {
    this.details = JSON.parse(localStorage.getItem('character') as any);
    this.homeWorld = this.details.homeworld;
    this.sw.getHomeWorld(this.homeWorld).subscribe(data => {
      this.homeWorld = data;
      this.homeWorld = this.homeWorld.name;
    })
  }

}

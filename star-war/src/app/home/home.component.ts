import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  original_src:any;
  src=[
     '../../assets/films_normal.png',
     '../../assets/species_normal.png',
     '../../assets/planets_normal.png',
     '../../assets/characters_normal.png',
     '../../assets/droids_normal.png',
     '../../assets/vehicles_normal.png',
  ]

  src_pressed = [
    '../../assets/films_pressed.png',
    '../../assets/species_pressed.png',
    '../../assets/planets_pressed.png',
    '../../assets/characters_pressed.png',
    '../../assets/droids_pressed.png',
    '../../assets/vehicles_pressed.png',
  ]

  ngOnInit(): void {
  }

  hover(key:number){
    this.original_src = this.src[key];
    this.src[key]=this.src_pressed[key];
  }

  unHover(key:any){
    this.src[key]=this.original_src;
  }

}

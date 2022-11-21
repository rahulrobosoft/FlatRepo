import { Component, OnInit } from '@angular/core';
import { StarwarService } from '../service/starwar.service';
let i=100;
@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.css']
})
export class CharactersDetailComponent implements OnInit {

  details:any;
  homeWorld:any;
  src='';
  constructor(private sw : StarwarService) { }

  ngOnInit(): void {    
    this.src = 'https://source.unsplash.com/random/?people/' + i++;
    this.details = JSON.parse(localStorage.getItem('character') as any);
  }

}

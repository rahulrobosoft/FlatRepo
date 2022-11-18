import { Component, OnInit } from '@angular/core';
import { StarwarService } from '../service/starwar.service';


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  details: any;
  reusable: any;
  deactivate = '';
  url = 'https://swapi.dev/api/people/';
  constructor(private sw: StarwarService) {         
  }

  ngOnInit() {
    this.sw.getPeople(this.url).subscribe(data => {
      this.details = data;
      localStorage.setItem('people',JSON.stringify(data));
      
    })
  }

  next() {
   
     this.sw.getPeople(this.details.next).subscribe(data => {
      this.details = data;
     })
    }


    previous(){
      this.sw.getPeople(this.details?.previous).subscribe(data => {
      this.details = data;
     })
    }

    detail_display(index:number){
      console.log(index);
      localStorage.setItem('character',JSON.stringify(this.details?.results[index]))
    }
  
  }

  




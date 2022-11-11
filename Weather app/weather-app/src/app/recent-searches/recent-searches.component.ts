import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectService } from '../service/redirect.service';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.css']
})
export class RecentSearchesComponent implements OnInit {

  weatherIcon:any;
  recent_searches:any;
  favorite_cities:any;

  // fb='favorite_border';
  add='add';
  // add1='';

  fav!:boolean;
  favB:boolean=true;
  show:boolean=false;

  constructor(private router:Router,private redirectService : RedirectService ) { }

  ngOnInit(): void {
    this.update();
    this.favorite_cities = localStorage.getItem('favorites');
    this.favorite_cities = JSON.parse(this.favorite_cities);
  }

  clearAll(){
    localStorage.removeItem('Cities');
    this.update();
    this.show = true;
  }

  check(name:string){
    if(this.favorite_cities){
      for(let fc of this.favorite_cities){
        if(fc['name'] == name){
          this.fav = true;
          this.favB = false;
          break;
        }
        else{
          this.fav = false;
          this.favB = true;
        }
      }
    }
  }

  update(){
      this.recent_searches = localStorage.getItem('Cities')
      this.recent_searches = JSON.parse(this.recent_searches);
  }

  redirectToHome(city:any){
  this.redirectService.redirectToHome(city);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.css']
})
export class RecentSearchesComponent implements OnInit {

  weatherIcon:any;
  constructor() { }
  recent_searches:any;
  favorite_cities:any;
  show:boolean=false;

  fb='favorite';
  add='add';
  fav!:boolean;
  favB:boolean=true;

  ngOnInit(): void {

    this.recent_searches = localStorage.getItem('Cities')
    this.recent_searches = JSON.parse(this.recent_searches);
    // this.weatherIcon = this.recent_searches['weather'][0].icon;

    if(localStorage.getItem('Cities')){
      this.show = false;
    }
    else{
      this.show = true;
    }
    // console.log(this.recent_searches);

    this.favorite_cities = localStorage.getItem('favorites');
    this.favorite_cities = JSON.parse(this.favorite_cities);

  }

  clearAll(){
    localStorage.removeItem('Cities');
    window.location.reload();
  }

  check(name:string){
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

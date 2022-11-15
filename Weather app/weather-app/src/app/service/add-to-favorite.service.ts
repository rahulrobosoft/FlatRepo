import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToFavoriteService  {

  currentCity :any;
  favorites:any;
  current:any;
  constructor() { }

  addToFavoriteArray(city:any){
    
    if (localStorage.getItem('favorites')) {
      this.favorites = JSON.parse(localStorage.getItem('favorites') as any);
      this.favorites = [city, ...this.favorites];
    }
    else {
      this.favorites = [city];
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}

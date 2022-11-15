import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoveFromFavoriteService {

  currentCity:any;
  favorites:any;
  current:any;

  constructor() { }


  removeFromFavoriteArray(city:any){

    this.favorites = JSON.parse(localStorage.getItem('favorites') as any);

    this.current = this.favorites.find((current: any) => {
      return current['name'] === city['name'];
    })

    this.favorites.splice(this.favorites.indexOf(this.current), 1);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));

    return this.favorites;

  }
}

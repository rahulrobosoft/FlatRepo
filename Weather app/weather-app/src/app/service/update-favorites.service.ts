import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateFavoritesService {

  constructor() { }

  updateFavorites(){
    return JSON.parse(localStorage.getItem('favorites') as any);
  }
}

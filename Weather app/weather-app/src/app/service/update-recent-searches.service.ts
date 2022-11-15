import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateRecentSearchesService {

  constructor() { }

  updateRecentSearches(){
    return JSON.parse(localStorage.getItem('Cities') as any);
  }
}

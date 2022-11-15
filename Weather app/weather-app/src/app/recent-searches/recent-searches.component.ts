import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectService } from '../service/redirect.service';
import { AddToFavoriteService } from '../service/add-to-favorite.service';
import { RemoveFromFavoriteService } from '../service/remove-from-favorite.service';
import { UpdateRecentSearchesService } from '../service/update-recent-searches.service';
import { UpdateFavoritesService } from '../service/update-favorites.service';
@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.css']
})
export class RecentSearchesComponent implements OnInit {

  weatherIcon: any;
  recent_searches: any;
  favorite_cities: any;

  // fb='favorite_border';
  add = 'add';
  // add1='';

  fav!: boolean;
  favB: boolean = true;
  show: boolean = false;

  constructor(
    private redirectService: RedirectService, 
    private atf: AddToFavoriteService, 
    private rff: RemoveFromFavoriteService,
    private uf: UpdateFavoritesService,
    private urs : UpdateRecentSearchesService,
    ) { }

  ngOnInit(): void {
    this.updateRecentSearches();
    this.updateFavorites();
  }

  clearAll() {
    localStorage.removeItem('Cities');
    this.updateRecentSearches();
    this.show = true;
  }

  check(name: string) {
    if (this.favorite_cities) {
      for (let fc of this.favorite_cities) {
        if (fc['name'] == name) {
          this.fav = true;
          this.favB = false;
          break;
        }
        else {
          this.fav = false;
          this.favB = true;
        }
      }
    }
  }

  

  addToFav(city: any) {
    this.atf.addToFavoriteArray(city);
    this.updateRecentSearches();
    this.updateFavorites();
  }

  removeFromFav(city: any) {

    this.favorite_cities = this.rff.removeFromFavoriteArray(city);

    if (this.favorite_cities.length >= 1) {
      this.updateRecentSearches();
      this.updateFavorites();
    } 
    else if(this.favorite_cities.length == 0){
      this.favB = true;
      this.fav = false;
      this.updateRecentSearches();
    }

  }

  updateRecentSearches() {
    this.recent_searches = this.urs.updateRecentSearches();
  }

  updateFavorites() {
    this.favorite_cities = this.uf.updateFavorites();
  }

  redirectToHome(city: any) {
    this.redirectService.redirectToHome(city);
  }

}

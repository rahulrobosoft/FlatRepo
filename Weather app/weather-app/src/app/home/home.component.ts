import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fb: any;
  details: any;
  temperature: any;
  weatherIcon: any;
  curr1: any;
  fav1: any;
  currentCity: any;

  celsius: boolean = true;
  farhan: boolean = false;

  add = 'no-add';
  it = 'Add to favorite';
  active1 = 'active';
  active2 = '';

  constructor(private http: HttpClient,) { }

  ngOnInit() {

    this.currentCity = localStorage.getItem('searchedCity');
    this.currentCity = JSON.parse(this.currentCity);

    this.temperature = this.currentCity['main'].temp;
    this.weatherIcon = this.currentCity['weather'][0].icon;

    this.fb = 'favorite_border';
    if (localStorage.getItem('favorites')) {
      this.fav1 = localStorage.getItem?.('favorites');
      this.fav1 = JSON.parse(this.fav1);

      for (let f of this.fav1) {
        if (f['name'] == this.currentCity['name']) {
          this.fb = 'favorite';
          this.add = 'add';
          this.it = 'Added to favourite';
          break;
        }
        else {
          this.fb = 'favorite_border'
          this.add = 'no-add';
          this.it = 'Add to favourite';
        };
      }
    }
  }

  addToFav() {

    this.fb == 'favorite_border' ? this.fb = 'favorite' : this.fb = 'favorite_border';
    this.add == 'no-add' ? this.add = 'add' : this.add = 'no-add';
    this.it == 'Add to favourite' ? this.it = 'Added to favourite' : this.it = 'Add to favourite';


    let favorites: string | any[] = [];
    let fav: any;
    let curr: any;

    if (this.fb == 'favorite') {

      if (localStorage.getItem('favorites')) {
        fav = localStorage.getItem('favorites');
        favorites = JSON.parse(fav);
        favorites = [this.currentCity, ...favorites];
      }
      else {
        favorites = [this.currentCity];
      }
      localStorage.setItem('favorites', JSON.stringify(favorites));

    }
    else {
      fav = localStorage.getItem('favorites');
      fav = JSON.parse(fav);
      console.log(fav);

      curr = fav.find((cur: any) => {
        return cur['name'] === this.currentCity['name'];
      })

      fav.splice(curr.index, 1);
      localStorage.setItem('favorites', JSON.stringify(fav));
    }
  }

  changeToCelsius() {
    this.celsius = true;
    this.farhan = false;
    this.active1 = 'active';
    this.active2 = '';
  }

  changeToFarhan() {
    this.celsius = false;
    this.farhan = true;
    this.active1 = '';
    this.active2 = 'active';
  }

}

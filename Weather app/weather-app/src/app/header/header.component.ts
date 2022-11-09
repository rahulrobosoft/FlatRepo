import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date = Date.now();
  active = 'active';
  show='';

  weather: any;

  constructor(private weatherService: WeatherService, private router: Router) { }

  ngOnInit(): void {

  }

  searchCity(city: string) {
    this.weatherService.getWeatherInfo(city).subscribe(data => {
      localStorage.setItem('searchedCity', JSON.stringify(data));
      this.weather = data;
      this.addAllSearchedCity(this.weather)

      this.router.navigate(['home'])
        .then(() => {
          window.location.reload();
        });
    })
  }

  addAllSearchedCity(data: any) {
    let cities = [];
    let sc: any;
    if (localStorage.getItem('Cities')) {
      sc = localStorage.getItem('Cities');
      cities = JSON.parse(sc);
      cities = [data, ...cities];
    }
    else { cities = [data]; }
    localStorage.setItem('Cities', JSON.stringify(cities));
  }

  bringMenu(){
    this.show = 'show';
  }


}

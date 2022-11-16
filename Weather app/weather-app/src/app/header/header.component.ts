import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date = Date.now();
  active = 'active';
  show = '';
  state :any;
  show_search!: boolean;
  value='';

  reactiveForm!:FormGroup;

  constructor(private weatherService: WeatherService, private router: Router) { }

  ngOnInit(): void { 
      this.reactiveForm = new FormGroup({
        city : new FormControl(null)
      })

      
  }

  searchCity() {

   
    if (this.reactiveForm.get('city')?.value) {
      console.log(this.reactiveForm.get('city')?.value);

      this.weatherService.getWeatherInfo(this.reactiveForm.get('city')?.value).subscribe({
        next: (data) => {
          localStorage.setItem('searchedCity', JSON.stringify(data));
          this.addAllSearchedCity(data);
          // this.refresh();
        }, error: (error) => {
          alert('City Not Found !!');
          // this.refresh();
        }
      })
    }
    this.show_search = false;
    this.reactiveForm.reset();
    this.router.navigate(['home']);

   

  }

  addAllSearchedCity(data: any) {

    let city: any;
    let cities = [];
    let sc: any;

    if (localStorage.getItem('Cities')) {
      sc = localStorage.getItem('Cities');
      cities = JSON.parse(sc);

      city = cities.find((city: any) => {
        return city['name'] == data['name'];
      })

      if (city == undefined) { //if city already exist 
        cities = [data, ...cities];
      }
      else { //if not move to top
        cities = this.moveToTop(cities, city);
      }
    }
    else {
      cities = [data];
    }
    localStorage.setItem('Cities', JSON.stringify(cities));



  }

  moveToTop(cities: any, city: any) {
    let FromIndex;
    const toIndex = 0;
    FromIndex = cities.indexOf(city);
    const element = cities.splice(FromIndex, 1)[0];
    cities.splice(toIndex, 0, element);
    return cities;
  }

  bringMenu() {
    this.show = 'show';
  }

  close() {
    this.show = '';
  }

  searchMobile() {
    this.show_search = true;
  }

  goBack() {
    this.show_search = false;
  }

  refresh() {
    this.router.navigate(['home'])
      .then(() => {
        window.location.reload();
      });
  }

  enterSubmit(event: any) {
    if (event.keyCode === 13)
      this.searchCity();
  }
}

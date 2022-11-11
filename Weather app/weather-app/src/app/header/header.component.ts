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
  show = '';
  show_search!:boolean;
  weather: any;

  constructor(private weatherService: WeatherService, private router: Router) { }

  ngOnInit(): void { }

  searchCity(city: string) {

  
    if(city){
      this.weatherService.getWeatherInfo(city).subscribe(data => {
        localStorage.setItem('searchedCity', JSON.stringify(data));
        this.weather = data;
        console.log(this.weather);
        
        this.addAllSearchedCity(this.weather)
        this.refresh();
      }, 
      
      (error) => {
        alert('City Not Found !!');
        this.refresh();
      })
    } 
    else{
      alert('Enter City name');
    }
    this.show_search = false;
  }

  addAllSearchedCity(data: any) {
    console.log(data['name']);
    let city:any;
    let cities = [];
    let sc: any;
    let FromIndex;
    const toIndex = 0;
    if (localStorage.getItem('Cities')) {
      sc = localStorage.getItem('Cities');
      cities = JSON.parse(sc);


      city = cities.find((city:any) => {
        return city['name'] == data['name'];
      })

      console.log(city);
        if(city == undefined)
        {
          cities = [data, ...cities];
        } 
        else {
          FromIndex = cities.indexOf(city); 
          const element = cities.splice(FromIndex,1)[0]; 
          cities.splice(toIndex,0,element);
        }
    }
    else {
       cities = [data]; 
      }
    localStorage.setItem('Cities', JSON.stringify(cities));
    
  }

  bringMenu() {
    this.show = 'show';
  }

  close() {
    this.show = '';
  }

  searchMobile(){
    this.show_search = true;
  }

  goBack(){
    this.show_search = false;
  }

  refresh(){
    this.router.navigate(['home'])
    .then(() => {
      window.location.reload();
    });
  }

}

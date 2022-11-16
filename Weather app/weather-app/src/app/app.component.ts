import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weather-app';

 
  constructor(private wService : WeatherService){}
  
  
  ngOnInit() {

   this.wService.getDefaultCity().subscribe(data => {
      localStorage.setItem('searchedCity',JSON.stringify(data));    
   });
  }


}

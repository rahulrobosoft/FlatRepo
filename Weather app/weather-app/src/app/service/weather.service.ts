import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HomeComponent } from '../home/home.component';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  city:string = "udupi";
  constructor(private http : HttpClient) { }

  getWeatherInfo(cityName:string){  
    return this.http.get(`${API_URL}/weather?q=${cityName}&appid=${API_KEY}`)
  }

  getDefaultCity(){
    return this.http.get(`${API_URL}/weather?q=${this.city}&appid=${API_KEY}`)
  }

 



  
}

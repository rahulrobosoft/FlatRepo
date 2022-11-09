import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  getWeatherInfo(cityName:string){
    return this.http.get(`${API_URL}/weather?q=${cityName}&appid=${API_KEY}`).pipe(catchError(async (err) => this.catchError(err)));
  }


  catchError(err:any){
    alert(err.value);
  }
}

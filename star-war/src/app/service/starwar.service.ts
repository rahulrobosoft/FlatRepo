import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


 
@Injectable({
  providedIn: 'root'
})
export class StarwarService {

  constructor(private http: HttpClient) {
  }
 

  getPeople(url:string ) {
    return this.http.get(url);
  }

  getHomeWorld(url:string){
    return this.http.get(url);
  }

  getFilms(){
    return this.http.get('https://swapi.dev/api/films');
  }

  getVehicles(url:string){
    return this.http.get(url);
  }

  getStarships(url:string){
    return this.http.get(url);
  }

  getPlanets(url:string){
    return this.http.get(url);
  }
  getSpecies(url:string){
    return this.http.get(url);
  }

  invalidateCache(): void {
   
  }
  
}

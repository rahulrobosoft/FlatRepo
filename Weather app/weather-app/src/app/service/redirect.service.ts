import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor(private router: Router) { }

  redirectToHome(city: any) {
    localStorage.setItem('searchedCity', JSON.stringify(city));
    this.router.navigate(['home']);
  }
  
}

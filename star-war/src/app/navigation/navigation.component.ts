import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../service/loader.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  active = 'active';
  url = '';
  isValue = 0;
  ngOnInit(): void {
    
  }
  constructor(private router: Router,public loader : LoaderService) { }

  highlight() {
    this.url = this.router.url;
    switch (this.url) {
      case "/film-details": this.isValue = 1; break;
      case "/species-details": this.isValue = 2; break;
      case "/planet-details": this.isValue = 3; break;
      case "/character-details": this.isValue = 4; break;
      case "/starship-details": this.isValue = 5; break;
      case "/vehicle-details": this.isValue = 6;
    }

  }

}

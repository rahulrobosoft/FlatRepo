import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router : Router) { }
  active= 'active';
  active1='';
  ngOnInit(): void {
    
  }

  hightlight(){
    console.log(this.router.url);
    
    if(this.router.url == '/character-details'){
      this.active1 = 'active';
    }else{
      this.active1 = '';
    }
  }
}

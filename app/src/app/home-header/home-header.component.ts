import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  userStr:any;
  userObj:any;
  constructor() { }

  ngOnInit(): void {
    this.userStr = localStorage.getItem("user");
    this.userObj = JSON.parse(this.userStr);

    // console.log("I am reloading");
    
  }

  

}

import { Component, OnInit } from '@angular/core';
import { StarwarService } from './service/starwar.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'star-war';

  constructor(private sw : StarwarService){}
  ngOnInit(){
  }
}

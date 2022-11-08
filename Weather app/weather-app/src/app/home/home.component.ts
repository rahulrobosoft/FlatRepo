import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DegreeConversionPipe } from '../degree-conversion.pipe';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fb='favorite_border';
  add='no-add';
  it='Add to favorite';
  details:any;
  temperature: any;
  celsius : boolean = true;
  farhan : boolean = false;
  constructor(private http : HttpClient,) { }

  ngOnInit(): void {

    this.http.get(`${API_URL}/weather?q=${"udupi"}&appid=${API_KEY}`).subscribe(data =>{
        
      console.log(data);
      this.details = data;
      this.temperature = (this.details['main'].temp)
      
    } );
    
  }

  addToFav(){
    this.fb == 'favorite_border' ? this.fb = 'favorite' : this.fb = 'favorite_border';
    this.add == 'no-add' ? this.add = 'add' : this.add = 'no-add';
    this.it == 'Add to favorite' ? this.it = 'Added to favorite' : this.it = 'Add to favorite';
  }

  changeToCelsius(){
    this.celsius = true;
    this.farhan = false;
  }

  changeToFarhan(){
    this.celsius = false;
    this.farhan = true;
  }

}

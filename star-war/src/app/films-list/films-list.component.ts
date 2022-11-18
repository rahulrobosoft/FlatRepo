import { Component, OnInit } from '@angular/core';
import { StarwarService } from '../service/starwar.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  details:any;
  constructor(private sw : StarwarService) { }

  ngOnInit(): void {
      this.sw.getFilms().subscribe(data => {
        this.details = data;
        console.log(data);
        
      })
  }

  detail_display(index:number)
{

}

next(){

}

previous(){

}
}

import { Component, OnInit } from '@angular/core';
import { StarwarService } from '../service/starwar.service';
@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css']
})
export class StarshipListComponent implements OnInit {

  details:any;
  deactivate_pre = '';
  deactivate_nex = '';
  url='https://swapi.dev/api/starships';
  constructor(private sw : StarwarService) { }

  ngOnInit(): void {
    this.sw.getStarships(this.url).subscribe(data => this.details = data);
  }

next() {
   
  this.sw.getStarships(this.details.next).subscribe(data => {
   this.details = data;
  })
 }


 previous(){
   this.sw.getStarships(this.details?.previous).subscribe(data => {
   this.details = data;
  })
 }

 detail_display(index:number){
   console.log(index);
   localStorage.setItem('starship',JSON.stringify(this.details?.results[index]))
 }

 deactivate_previous(){
  if(this.details.previous === null){
    this.deactivate_pre = 'deactive';
  }else{
    this.deactivate_pre = '';
  }
}

deactivate_next(){
  if(this.details.next === null){
    this.deactivate_nex = 'deactive';
  }else{
    this.deactivate_nex = '';
  }
}
}

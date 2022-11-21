import { Component, OnInit } from '@angular/core';
import { StarwarService } from '../service/starwar.service';
let url='https://swapi.dev/api/starships';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css']
})
export class StarshipListComponent implements OnInit {

  details:any;
  deactivate_pre = '';
  deactivate_nex = '';
  constructor(private sw : StarwarService) { }

  ngOnInit(): void {
    this.sw.getStarships(url).subscribe(data => this.details = data);
  }

next() {
  url = this.details?.next;
  this.sw.getStarships(this.details.next).subscribe(data => {
   this.details = data;
  })
 }


 previous(){
  url = this.details?.previous;
   this.sw.getStarships(this.details?.previous).subscribe(data => {
   this.details = data;
  })
 }

 detail_display(index:number){
   console.log(index);
   localStorage.setItem('starship',JSON.stringify(this.details?.results[index]))
 }

 deactivate_previous(){
  if(this.details?.previous === null){
    this.deactivate_pre = 'deactive';
  }else{
    this.deactivate_pre = '';
  }
}

deactivate_next(){
  if(this.details?.next === null){
    this.deactivate_nex = 'deactive';
  }else{
    this.deactivate_nex = '';
  }
}
}

import { Component, OnInit } from '@angular/core';
import { StarwarService } from '../service/starwar.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  details:any;
  deactivate_pre = '';
  deactivate_nex = '';
  url='https://swapi.dev/api/planets';
  constructor(private sw : StarwarService) { }

  ngOnInit(): void {
    this.sw.getPlanets(this.url).subscribe(data => {
      this.details = data;
      console.log(data);
      
    })
  }

  detail_display(index:number){
    localStorage.setItem('planet',JSON.stringify(this.details.results[index]));
  }

  previous(){
    this.sw.getPlanets(this.details.previous).subscribe(data => {
      this.details = data;
    })
  }

  next(){
    this.sw.getPlanets(this.details.next).subscribe(data => {
      this.details = data;
    })
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

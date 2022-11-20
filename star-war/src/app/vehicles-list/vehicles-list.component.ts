import { Component, OnInit } from '@angular/core';
import { StarwarService } from '../service/starwar.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  details:any;
  deactivate_pre = '';
  deactivate_nex = '';
  url = 'https://swapi.dev/api/vehicles';
  constructor(private sw : StarwarService) { }

  ngOnInit(): void {
    this.sw.getVehicles(this.url).subscribe(data => this.details = data)
  }

  detail_display(index:number){
    localStorage.setItem('vehicle',JSON.stringify(this.details.results[index]));
  }

  previous(){
    this.sw.getSpecies(this.details.previous).subscribe(data => {
      this.details = data;
    })
  }

  next(){
    this.sw.getSpecies(this.details.next).subscribe(data => {
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

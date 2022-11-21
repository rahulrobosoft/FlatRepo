import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { StarwarService } from '../service/starwar.service';

let url = 'https://swapi.dev/api/people/';
@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  details: any;
  deactivate_pre = '';
  deactivate_nex = '';
  // url = 'https://swapi.dev/api/people/';
  constructor(private sw: StarwarService) {
    
   
  }

  ngOnInit() {
    console.log(url);
    
    this.sw.getPeople(url).subscribe(data => {
      this.details = data;
      localStorage.setItem('people', JSON.stringify(data));
      
    })
  }

  next() {
    url=this.details?.next;
    console.log(url);
    
    this.sw.getPeople(this.details.next).subscribe(data => {
      this.details = data;
    })
  }


  previous() {
    url=this.details?.previous;
    this.sw.getPeople(this.details?.previous).subscribe(data => {
      this.details = data;
    })
  }

  detail_display(index: number) {
    localStorage.setItem('character', JSON.stringify(this.details?.results[index]))
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






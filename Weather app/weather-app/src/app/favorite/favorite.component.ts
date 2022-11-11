import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemoveFavsComponent } from '../remove-favs/remove-favs.component';
import { Router } from '@angular/router';
import { RedirectService } from '../service/redirect.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent implements OnInit {

  show!: boolean;
  favorites: any;
  fav: any;
  curr: any;
  searchedCity:any;

  fb = 'favorite';
  add = 'add';
  status!:boolean;

  constructor(private dialog: MatDialog, private router: Router,private redirectService: RedirectService) { }

  ngOnInit() {
    this.update();

   
  }

  openDialog() {
    let dialogRef = this.dialog.open(RemoveFavsComponent, {
      height: "210px",
      width: "458px",
    })

    dialogRef.afterClosed().subscribe(data => {
      console.log(data.data);
      this.update();
    })
  }

  removeFromFav(name: string) {
    console.log(name);
    this.fav = localStorage.getItem('favorites');
    this.fav = JSON.parse(this.fav);

    this.curr = this.fav.find((cur: any) => {
      return cur['name'] === name;
    })
    
    this.fav.splice(this.fav.indexOf(this.curr), 1);
    this.favorites = this.fav;
    localStorage.setItem('favorites', JSON.stringify(this.fav));
    this.update();
  }

  update(){
    this.favorites = localStorage.getItem('favorites');
    this.favorites = JSON.parse(this.favorites);
  }

  redirectToHome(city:any){
    this.redirectService.redirectToHome(city);
  }
}

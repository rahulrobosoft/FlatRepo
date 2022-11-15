import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemoveFavsComponent } from '../remove-favs/remove-favs.component';
import { Router } from '@angular/router';
import { RedirectService } from '../service/redirect.service';
import { RemoveFromFavoriteService } from '../service/remove-from-favorite.service';
import { UpdateFavoritesService } from '../service/update-favorites.service';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent implements OnInit {

  favorites: any;

  constructor(
    private router: Router,
    private dialog: MatDialog, 
    private redirectService: RedirectService,
    private rff : RemoveFromFavoriteService,
    private uf : UpdateFavoritesService
    ) { }

  ngOnInit() {
    this.update();
    localStorage.setItem('url',JSON.stringify(this.router.url))
  }

  openDialog() {
    let dialogRef = this.dialog.open(RemoveFavsComponent, {
      height: "210px",
      width: "458px",
    })
    dialogRef.afterClosed().subscribe(() => this.update());
  }

  removeFromFav(city: any) {
    this.favorites = this.rff.removeFromFavoriteArray(city)
    this.update();
  }

  redirectToHome(city:any){
    this.redirectService.redirectToHome(city);
  }

  update(){
    this.favorites = this.uf.updateFavorites();
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemoveFavsComponent } from '../remove-favs/remove-favs.component';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  show: any;
  favorites: any;

  fb = 'favorite';
  add = 'add';
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.favorites = localStorage.getItem('favorites');
    this.favorites = JSON.parse(this.favorites);

    if (localStorage.getItem('favorites')) {
      this.show = false;
    }
    else {
      this.show = true;
    }
  }

  openDialog() {
    this.dialog.open(RemoveFavsComponent, {
      height: "210px",
      width: "458px",
    })
  }

  removeFromFav(name: string) {
    console.log(name);

    if (this.fb == 'favorite') {
      // this.fb='favorite_border';
      // this.add = 'no-add';
      let fav: any;
      let curr: any;

      fav = localStorage.getItem('favorites');
      fav = JSON.parse(fav);
      console.log(fav);

      curr = fav.find((cur: any) => {
        return cur['name'] === name;
      })

      fav.splice(curr.index, 1);
      localStorage.setItem('favorites', JSON.stringify(fav));
      window.location.reload();




    }
    else {
      this.fb = 'favorite';
      this.add = 'add';
    }
  }

}

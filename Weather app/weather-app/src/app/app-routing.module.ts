import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RecentSearchesComponent } from './recent-searches/recent-searches.component';
let url='\home';
url=JSON.parse(localStorage.getItem('url')as any);

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'home',component:HomeComponent},
  {path:'favourites',component:FavoriteComponent},
  {path:'recent-searches',component:RecentSearchesComponent},
  {path:'',redirectTo:url, pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

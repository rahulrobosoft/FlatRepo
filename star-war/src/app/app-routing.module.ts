import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { FilmDetailsComponent } from './films-list/film-details/film-details.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { HomeComponent } from './home/home.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { SpeciesListComponent } from './species-list/species-list.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';

const routes: Routes = [
  {path:'characters',component:CharactersListComponent},
  {path:'films', component:FilmsListComponent},
  {path:'film-details',component:FilmDetailsComponent},
  {path:'species',component:SpeciesListComponent},
  {path:'planets',component:PlanetsListComponent},
  {path:'starships',component:StarshipsListComponent},
  {path:'vehicles',component:VehiclesListComponent},
  {path:'home',component:HomeComponent},
  {path:'character-details',component:CharactersDetailComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { FilmDetailsComponent } from './films-list/film-details/film-details.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { HomeComponent } from './home/home.component';
import { PlanetDetailsComponent } from './planets-list/planet-details/planet-details.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { SpeciesDetailsComponent } from './species-list/species-details/species-details.component';
import { SpeciesListComponent } from './species-list/species-list.component';
import { StarshipDetailsComponent } from './starship-list/starship-details/starship-details.component';
import { StarshipListComponent } from './starship-list/starship-list.component';
import { VehicleDetailsComponent } from './vehicles-list/vehicle-details/vehicle-details.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
const routes: Routes = [
  { path: 'characters', component: CharactersListComponent },
  { path: 'character-details', component: CharactersDetailComponent },
  { path: 'films', component: FilmsListComponent },
  { path: 'film-details', component: FilmDetailsComponent },
  { path: 'species', component: SpeciesListComponent },
  { path: 'species-details', component: SpeciesDetailsComponent },
  { path: 'planets', component: PlanetsListComponent },
  { path: 'planet-details', component: PlanetDetailsComponent },
  { path: 'starships', component: StarshipListComponent },
  { path: 'starship-details', component: StarshipDetailsComponent },
  { path: 'vehicles', component: VehiclesListComponent },
  { path: 'vehicle-details', component:VehicleDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';
import { StarwarService } from './service/starwar.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CacheInterceptor } from './cache.interceptor';
import { FilmsListComponent } from './films-list/films-list.component';
import { SpeciesListComponent } from './species-list/species-list.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { FilmDetailsComponent } from './films-list/film-details/film-details.component';
import { PlanetDetailsComponent } from './planets-list/planet-details/planet-details.component';
import { SpeciesDetailsComponent } from './species-list/species-details/species-details.component';
import { StarshipListComponent } from './starship-list/starship-list.component';
import { StarshipDetailsComponent } from './starship-list/starship-details/starship-details.component';
import { VehicleDetailsComponent } from './vehicles-list/vehicle-details/vehicle-details.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoaderService } from './service/loader.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CharactersListComponent,
    NavigationComponent,
    CharactersDetailComponent,
    FilmsListComponent,
    SpeciesListComponent,
    PlanetsListComponent,
    VehiclesListComponent,
    FilmDetailsComponent,
    PlanetDetailsComponent,
    SpeciesDetailsComponent,
    StarshipListComponent,
    StarshipDetailsComponent,
    VehicleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [StarwarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    }, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

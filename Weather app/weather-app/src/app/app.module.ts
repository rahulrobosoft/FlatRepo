import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RecentSearchesComponent } from './recent-searches/recent-searches.component';
import { RemoveFavsComponent } from './remove-favs/remove-favs.component';
import { HttpClientModule } from '@angular/common/http';
import { DegreeConversionPipe } from './degree-conversion.pipe';
import { WeatherService } from './service/weather.service';
import { RedirectService } from './service/redirect.service';
import { FarhanconversionPipe } from './farhanconversion.pipe';
import { AddToFavoriteService } from './service/add-to-favorite.service';
import { RemoveFromFavoriteService } from './service/remove-from-favorite.service';
import { UpdateFavoritesService } from './service/update-favorites.service';
import { UpdateRecentSearchesService } from './service/update-recent-searches.service';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FavoriteComponent,
    RecentSearchesComponent,
    RemoveFavsComponent,
    DegreeConversionPipe,
    FarhanconversionPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    WeatherService,
    RedirectService,
    AddToFavoriteService,
    RemoveFromFavoriteService,
    UpdateFavoritesService,
    UpdateRecentSearchesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

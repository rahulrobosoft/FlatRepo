import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PlaneHeaderComponent } from './plane-header/plane-header.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlaneHeaderComponent,
    ForgotComponent,
    HomeComponent,
    HomeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

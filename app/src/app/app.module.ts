import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PlaneHeaderComponent } from './plane-header/plane-header.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { DialogOptionsComponent } from './dialog-options/dialog-options.component';
import { DialogOptions2Component } from './dialog-options2/dialog-options2.component';
import { ChangePassComponent } from './change-pass/change-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlaneHeaderComponent,
    ForgotComponent,
    HomeComponent,
    HomeHeaderComponent,
    FooterComponent,
    DialogOptionsComponent,
    DialogOptions2Component,
    ChangePassComponent,
  ],
  entryComponents:[DialogOptionsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

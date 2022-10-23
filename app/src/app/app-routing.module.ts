import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'forgot',component:ForgotComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'changePassword',component:ChangePassComponent},
  {path:'',redirectTo:'/login', pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

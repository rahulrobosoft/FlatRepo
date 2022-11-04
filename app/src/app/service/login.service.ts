import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Login } from '../interface/login'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  body:any;
  constructor(private http:HttpClient) { }

  getLoginInfo():Observable<Login[]>{
    return this.http.get<Login[]>('http://localhost:3000/login');
  }

  updatePassword(password:any,id:any,name:any){
    
    const body = {
      id:id,
      userName:name,
      password:password,
    }

    const url = 'http://localhost:3000/login/' + id;

    return this.http.put(url,body);
  }

  
}

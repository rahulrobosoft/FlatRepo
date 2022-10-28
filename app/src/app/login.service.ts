import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface login1 {  
  id:number;
  userName:string;
  password:string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginCheck():Observable<login1>{
    return this.http.get<login1>('http://localhost:3000/login');
  }
}

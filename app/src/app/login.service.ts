import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
interface login1 extends Array<login1[]> {  
  id:number;
  userName:string;
  password:string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  body:any;
  constructor(private http:HttpClient) { }

  

  loginCheck():Observable<login1[]>{
    return this.http.get<login1[]>('http://localhost:3000/login');
  }

  updatePassword(password:any,id:any,name:any){
    console.log(id);
    
    const body = {
      id:id,
      userName:name,
      password:password,
    }
    console.log(id) ;
    const url = 'http://localhost:3000/login/' + id;
    return this.http.put(url,body);
  }
}

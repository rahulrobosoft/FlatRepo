import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
interface login1 extends Array<login1[]> {  
  id:number;
  userName:string;
  password:string;
}

interface admins extends Array<admins[]>{
  id:number;
  name : string;
  empCode : string;
  email : string;
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
    
    const body = {
      id:id,
      userName:name,
      password:password,
    }

    const url = 'http://localhost:3000/login/' + id;

    return this.http.put(url,body);
  }

  getAdmins(){
    return this.http.get<admins[]>('http://localhost:3000/admins');
  }

  addAdmin(name:any,code:any,email:any){
    const body = {
        name : name,
        empCode : code,
        email : email
    }
    return this.http.post('http://localhost:3000/admins',body);
  }
}

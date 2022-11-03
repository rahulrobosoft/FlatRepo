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

interface id {
  id:number;
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

  addAdmin(name:any,code:any,email:any):Observable<id>{
    const body = {
        name : name,
        empCode : code,
        email : email
    }
    return this.http.post<id>('http://localhost:3000/admins',body);
  }

  deleteSuperAdmin(id:any){
    return this.http.delete('http://localhost:3000/admins/' + id);
  }

  editSuperAdmin(id:any,name:any,empCode:any,mail:any){
    const body = {
      name : name,
      empCode : empCode,
      email : mail,
      id : id
    }
    return this.http.put('http://localhost:3000/admins/'+ id,body);
  }
}

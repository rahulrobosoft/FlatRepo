import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface admins extends Array<admins[]>{
  name : string,
  empCode : string,
  email : string,
  id : number
}
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getAdmins():Observable<admins[]>{
    return this.http.get<admins[]>("http://localhost:3000/admins");
  }
}

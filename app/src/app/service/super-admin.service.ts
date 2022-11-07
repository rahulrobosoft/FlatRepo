import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SuperAdmins } from '../interface/super-admins';
import { Identity } from '../interface/identity';
import { EditAdmin } from '../interface/edit-admin';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  constructor(private http:HttpClient) { }


  getSuperAdmins(){
    return this.http.get<SuperAdmins[]>('http://localhost:3000/superadmins');
  }

  addSuperAdmin(name:any,code:any,email:any):Observable<Identity>{
    const body = {
        name : name,
        empCode : code,
        email : email
    }
    return this.http.post<Identity>('http://localhost:3000/superadmins',body);
  }

  deleteSuperAdmin(id:any){
    return this.http.delete('http://localhost:3000/superadmins/' + id);
  }

  editSuperAdmin(id:any,name:any,empCode:any,mail:any):Observable<EditAdmin>{
    const body = {
      name : name,
      empCode : empCode,
      email : mail,
      id : id
    }
    return this.http.put<EditAdmin>('http://localhost:3000/superadmins/'+ id,body);
  }
}

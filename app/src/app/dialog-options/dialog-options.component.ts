import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import * as cjs from 'crypto-js';


@Component({
  selector: 'app-dialog-options',
  templateUrl: './dialog-options.component.html',
  styleUrls: ['./dialog-options.component.css']
})
export class DialogOptionsComponent implements OnInit {


  reactiveForm!: FormGroup;
  admin_details: any;
  name: any;
  empCode: any;
  email: any;
  db: boolean = true;
  i:number =0;



  constructor(private lService: LoginService) { }

  ngOnInit() {
    
    this.lService.getAdmins().subscribe(data => {

      this.admin_details = data;

      for (let d of this.admin_details) {
        d.name = this.decrypt(d.name);
        d.empCode = this.decrypt(d.empCode);
        d.email = this.decrypt(d.email);
      }
    })

    this.reactiveForm = new FormGroup({
      name: new FormControl(null),
      empcode: new FormControl(null),
      mail: new FormControl(null)
    })
  }

  onSubmit() {

    this.name = this.encrypt(this.reactiveForm.get('name')?.value);
    this.empCode = this.encrypt(this.reactiveForm.get('empcode')?.value);
    this.email = this.encrypt(this.reactiveForm.get('mail')?.value);

    if (this.name != null && this.empCode != null && this.email != null) {
     
        this.lService.addAdmin(this.name, this.empCode, this.email).subscribe(data => {
          this.admin_details.push({
            name: this.decrypt(this.name),
            empCode: this.decrypt(this.empCode),
            email: this.decrypt(this.email),
            id:data.id,
          })
        });
      
      
      
    }
    else{
      alert("Empty values cannot be added");
    }
    this.reactiveForm.reset();
  }

  
  deleteSuperAdmin(id: number) {

      this.i =0;
      this.lService.deleteSuperAdmin(id).subscribe(data => {
        for (let ad of this.admin_details) {
          if (ad.id == id) {
            this.admin_details.splice(this.i, 1);
          }
          this.i++;
        }
      });
  }

  editSuperAdmin(id:number){
    for(let ad of this.admin_details){
      if(ad.id == id){
        this.reactiveForm.setValue({name : ad.name, empcode : ad.empCode, mail : ad.email})
      }
   

      
    }
  }


  encrypt(data: any) {
    if (data != null) { 
      return cjs.AES.encrypt(data, "Hello").toString(); this.email 
    }
    else { 
      return null 
    }
  }

  decrypt(data: any) {
    return cjs.AES.decrypt(data, "Hello").toString(cjs.enc.Utf8);
  }


}

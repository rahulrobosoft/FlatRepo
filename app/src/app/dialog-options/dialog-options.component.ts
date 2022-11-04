import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { SuperAdminService } from '../service/super-admin.service';
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
  currentAdmin: any;

  db: boolean = true;
  editMode: boolean = false;

  i: number = 0;
  currentAdminId: number = 0;



  constructor(private lService: LoginService,private saService:SuperAdminService) { }

  ngOnInit() {

    this.reactiveForm = new FormGroup({
      name: new FormControl(null),
      empcode: new FormControl(null),
      mail: new FormControl(null)
    })

    this.saService.getSuperAdmins().subscribe(data => {
      this.admin_details = data;

      //iterate admin_details array and decrypt each item
      for (let d of this.admin_details) {
        d.name = this.decrypt(d.name);
        d.empCode = this.decrypt(d.empCode);
        d.email = this.decrypt(d.email);
      }
    })

  }

  onSubmit() {

    //encrypt each form field recieved from UI
    this.name = this.encrypt(this.reactiveForm.get('name')?.value);
    this.empCode = this.encrypt(this.reactiveForm.get('empcode')?.value);
    this.email = this.encrypt(this.reactiveForm.get('mail')?.value);


    if (this.name != null && this.empCode != null && this.email != null) {

      if (!this.editMode) {
        this.saService.addSuperAdmin(this.name, this.empCode, this.email)
          .subscribe(data => {
            this.admin_details.push({
              name: this.decrypt(this.name),
              empCode: this.decrypt(this.empCode),
              email: this.decrypt(this.email),
              id: data.id,
            })
          });
      }

      else {
        this.saService.editSuperAdmin(this.currentAdminId, this.name, this.empCode, this.email)
          .subscribe(data => {
            this.currentAdmin = this.admin_details.find((ad: any) => {
              return ad.id == this.currentAdminId;
            })
            this.currentAdmin.name = this.decrypt(data.name);
            this.currentAdmin.empCode = this.decrypt(data.empCode);
            this.currentAdmin.email = this.decrypt(data.email);
            this.currentAdmin.id = data.id;
          });
      }

      this.editMode = false;
      console.log(this.admin_details);

    }
    else {
      alert("Empty values cannot be added");
    }
    this.reactiveForm.reset();
  }


  deleteSuperAdmin(id: number) {

    this.i = 0;
    this.saService.deleteSuperAdmin(id).subscribe(data => {
      for (let ad of this.admin_details) {
        if (ad.id == id) {
          this.admin_details.splice(this.i, 1);
        }
        this.i++;
      }
    });
  }

  editSuperAdmin(id: number) {

    this.currentAdminId = id;
    this.currentAdmin = this.admin_details.find((ad: any) => {
      return ad.id == id;
    })

    this.reactiveForm.setValue({ 
      name: this.currentAdmin.name, 
      empcode: this.currentAdmin.empCode,
      mail: this.currentAdmin.email 
    })

    this.editMode = true;

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

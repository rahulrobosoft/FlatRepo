import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-dialog-options2',
  templateUrl: './dialog-options2.component.html',
  styleUrls: ['./dialog-options2.component.css']
})
export class DialogOptions2Component implements OnInit {

  admin_details:any;
  reactiveForm!:FormGroup;
  name:any;
  empCode:any;
  email:any;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAdmins().subscribe(data => {
  this.admin_details = data;
  console.log(this.admin_details);
    });
   
    


    this.reactiveForm = new FormGroup({
      name : new FormControl(null),
      empCode : new FormControl(null),
      email:new FormControl(null)
    })
  }

  addAdmin(){
    console.log("hai");
    
    this.name = this.reactiveForm.get('name')?.value;
    this.empCode = this.reactiveForm.get('empCode')?.value;
    this.email = this.reactiveForm.get('email')?.value;

    this.admin_details.push({
      name : this.name,
      empCode : this.empCode,
      email : this.email,
      id:3,

    });

    console.log(this.admin_details);
    
  }

}

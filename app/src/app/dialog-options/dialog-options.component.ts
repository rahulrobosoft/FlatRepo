import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dialog-options',
  templateUrl: './dialog-options.component.html',
  styleUrls: ['./dialog-options.component.css']
})
export class DialogOptionsComponent implements OnInit {

  reactiveForm!:FormGroup;
  admin_details:any;
  constructor(private lService:LoginService) { }

  ngOnInit() {
    this.lService.getAdmins().subscribe(data =>{
     this.admin_details = data;
    })

    this.reactiveForm = new FormGroup({
      name : new FormControl(null),
      empcode : new FormControl(null),
      mail:new FormControl(null)
    })
  }

  onSubmit(){
    this.admin_details.push({name : this.reactiveForm.get('name')?.value, empCode :this.reactiveForm.get('empcode')?.value, email :this.reactiveForm.get('mail')?.value })
    this.lService.addAdmin(this.reactiveForm.get('name')?.value,this.reactiveForm.get('empcode')?.value,this.reactiveForm.get('mail')?.value).subscribe();

    this.reactiveForm.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { passwordMatch } from 'src/validators/passwordMatch';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import * as cryptojs from 'crypto-js';



@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  reactiveForm!:FormGroup;
  pass:number=0;
  id:any;
  name:any;
  decrypt:any;


  constructor(private router:Router,private lservice: LoginService) { }
  
  ngOnInit() {


    this.name = localStorage.getItem('user'); //string
    this.name = JSON.parse(this.name); //obj
    // console.log(this.name.password);
    
    this.decrypt = cryptojs.AES.decrypt(this.name.password,"Hello").toString(cryptojs.enc.Utf8);
    // console.log(this.decrypt);
    


    // console.log(this.name.username); //prop

    //fetch id of logged in user
      this.lservice.getLoginInfo().subscribe(data => {
        for(let i of data){
          if(i.userName == this.name.username){            
            this.id = i.id;
            break;
          }
        }
      })
        

    this.reactiveForm = new FormGroup({
      newpass:new FormControl(null,[Validators.required, Validators.pattern('[0-9]*')]),
      confirmpass:new FormControl(null,[Validators.required, Validators.pattern('[0-9]*')])
    },[passwordMatch("newpass","confirmpass")])
  }


  onSubmit(){

    if(this.reactiveForm.get('newpass')?.value == this.reactiveForm.get('confirmpass')?.value)
    {
      this.pass = this.reactiveForm.get('newpass')?.value;
      this.lservice.updatePassword(this.pass,this.id,this.name.username).subscribe()
      this.router.navigate(['login']);
    }
    else
    {
      alert("Password doesn't match");
    }
  }
}


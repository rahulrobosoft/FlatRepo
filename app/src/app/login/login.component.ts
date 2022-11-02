import { Component, OnInit,  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import * as cryptojs from 'crypto-js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reactiveForm!: FormGroup;
  submitted!: boolean;
  uname!: boolean;
  password!: boolean;
  name: any;
  encrypt:Object = {};

  constructor(private lService: LoginService, private _router: Router) { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      password: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
    })
  }

  onSubmit() {
    this.submitted = true;

   

    //Set the user details to localStorage
    this.encrypt = {
      username : this.reactiveForm.get('username')?.value,
      password : cryptojs.AES.encrypt(this.reactiveForm.get('password')?.value,"Hello").toString(),
    }

    
    localStorage.setItem('user', JSON.stringify(this.encrypt));

    


  
    

    this.lService.loginCheck().subscribe(data => {

      for (let d of data) {
        if (this.reactiveForm.get('password')?.value == d.password &&
          this.reactiveForm.get('username')?.value == d.userName) {

          this._router.navigate(['home'])

          break;
        }

        if (this.reactiveForm.get('password')?.value != d.password) {
          this.password = true;
          this._router.navigate(['login'])
        }


        if (this.reactiveForm.get('username')?.value != d.userName) {
          this.uname = true;
          this._router.navigate(['login'])
        }
      }

    })
  }

}

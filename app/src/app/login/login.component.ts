import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rl: string = ""
  submitted!: boolean;
  uname!: boolean;
  password!: boolean;

  constructor(private lService: LoginService, private _router: Router) { }

  reactiveForm!: FormGroup;


  ngOnInit() {
    this.reactiveForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      password: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),

    })

  
    

  }

  onSubmit() {
    console.log(this.reactiveForm);
    this.submitted = true;

    localStorage.setItem('user',JSON.stringify(this.reactiveForm.value));
    sessionStorage.setItem('user',JSON.stringify(this.reactiveForm.value));



    this.lService.loginCheck().subscribe(data => {
      if (this.reactiveForm.get('password')?.value == data.password && this.reactiveForm.get('username')?.value == data.userName) {
        this._router.navigate(['home'])
      }
      if (this.reactiveForm.get('password')?.value != data.password) {
        this.password = true;
        this._router.navigate(['login'])
        console.log(data.password);
      }
      if (this.reactiveForm.get('username')?.value != data.userName) {
        this.uname = true;
        this._router.navigate(['login'])
        console.log(data.userName);

      }
    })
  }

}

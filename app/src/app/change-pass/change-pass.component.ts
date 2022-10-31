import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { passwordMatch } from 'src/validators/passwordMatch';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  
  reactiveForm!:FormGroup;
  constructor(private router:Router,private lservice: LoginService) { }
  pass:number=0;
  id:any;
  name:any;
  ngOnInit() {


        this.name = localStorage.getItem('user');
        this.name = JSON.parse(this.name);
        console.log(this.name.username);


      this.lservice.loginCheck().subscribe(data => {
        for(let i of data){
          if(i.userName == this.name.username){
            console.log(i.id);
            
            this.id = i.id;
            console.log(this.id);

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
    // console.log(this.reactiveForm);

   
    
    if(this.reactiveForm.get('newpass')?.value == this.reactiveForm.get('confirmpass')?.value)
    {
      this.pass = this.reactiveForm.get('newpass')?.value;





      this.lservice.updatePassword(this.pass,this.id,this.name.username).subscribe()
      this.router.navigate(['login']);
    }
    else{
      alert("Password doesn't match");
    }
  }


}

// 18004190065 - axis credut

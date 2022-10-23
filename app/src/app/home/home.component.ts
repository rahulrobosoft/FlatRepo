import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOptionsComponent } from '../dialog-options/dialog-options.component';
import { DialogOptions2Component } from '../dialog-options2/dialog-options2.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  it: string = '+';
  class: string = '';
  hide: boolean = true;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openOptions() {
    this.class = "cdk-overlay-backdrop-hidden";

    // this.dialog.open(DialogOptionsComponent);
    if (this.it == '+') {
      this.hide = false;
      this.it = 'x';

    }
    else {
      this.it = '+';
      this.hide = true;
    }
  }

  openSaDialog(){
    this.dialog.open(DialogOptionsComponent,{
      height:"500px",
      width:"900px",
    });
  }

  openAdDialog(){
    this.dialog.open(DialogOptions2Component,{
      height:"500px",
      width:"900px",
    });
  }
}





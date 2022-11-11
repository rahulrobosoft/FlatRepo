import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-favs',
  templateUrl: './remove-favs.component.html',
  styleUrls: ['./remove-favs.component.css']
})
export class RemoveFavsComponent implements OnInit {


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<RemoveFavsComponent>
  ) { }


  ngOnInit(): void { }

  confirm() {
    localStorage.removeItem('favorites');
    this.dialogRef.close({ data: 'Cleared All' });
  }

  cancel() {
    this.dialogRef.close({ data: 'Clicked No' });
  }

}

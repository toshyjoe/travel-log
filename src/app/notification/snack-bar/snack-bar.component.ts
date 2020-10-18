import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {

  constructor(private matSnackBar : MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message, action) {
    this.matSnackBar.open(message, action, {duration: 2000}); 
  }

}

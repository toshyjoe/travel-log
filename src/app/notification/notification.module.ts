import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackBarComponent } from './snack-bar/snack-bar.component'; 
import { MatButtonModule } from '@angular/material/button'; 



@NgModule({
  declarations: [SnackBarComponent],
  imports: [
    CommonModule, 
    MatSnackBarModule, 
    MatButtonModule
  ], 
  exports: [
    SnackBarComponent
  ]
})
export class NotificationModule { }

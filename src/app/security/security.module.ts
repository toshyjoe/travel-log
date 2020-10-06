import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { CreateAccountComponent } from './create-account/create-account.component' ;
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 


  @NgModule({
    declarations: [
      LoginPageComponent, 
      LogoutButtonComponent, 
      CreateAccountComponent],
    imports: [
      CommonModule, 
      FormsModule, 
      MatTabsModule, 
      MatInputModule, 
      MatButtonModule
    ], 
    exports: [
    LoginPageComponent, 
    LogoutButtonComponent
  ]
})
export class SecurityModule { }

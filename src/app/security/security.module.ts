import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { CreateAccountComponent } from './create-account/create-account.component' ;



  @NgModule({
    declarations: [LoginPageComponent, LogoutButtonComponent, CreateAccountComponent],
    imports: [
      CommonModule, FormsModule
    ], 
    exports: [
    LoginPageComponent, LogoutButtonComponent
  ]
})
export class SecurityModule { }

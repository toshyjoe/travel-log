import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/api/services/user.service';
import { AuthRequest } from 'src/app/models/auth-request';
import { UserRequest } from 'src/app/models/user-request';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  userRequest: UserRequest; 
  authRequest: AuthRequest; 
  createError: boolean; 
  loginError: boolean; 

  constructor(private userService: UserService, private router: Router, 
              private auth: AuthService, private matSnackBar : MatSnackBar) { 
    this.userRequest = new UserRequest()
    this.createError = false; 
    this.loginError = false; 
    this.authRequest = new AuthRequest(); 
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if(form.valid) {
      this.createError = false; 

      this.userService.createUser(this.userRequest).subscribe({
        next: () => {

          this.authRequest.username = this.userRequest.name; 
          this.authRequest.password = this.userRequest.password; 

          this.auth.login(this.authRequest).subscribe({
            next: () => {
              this.router.navigateByUrl("/"),
              this.openSnackBar('Account created! ', null)               
            },
            error: (err) => {
              this.loginError = true;
              this.openSnackBar('Authentication failed ', null)
              // console.warn(`Authentication failed: ${err.message}`);
            },
          });
        },
        error: (err) => {
          this.createError = true; 
          console.log(`----- ERREUR : lors de la Creation de user : ${err.message}`); 
          this.openSnackBar('Account creation failed! ', null)
        }
      })

    }

  }

  openSnackBar(message, action) {
    this.matSnackBar.open(message, action, {duration: 2000}); 
  }
}

import { Component, OnInit } from "@angular/core";
import { AuthRequest } from "src/app/models/auth-request";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar'; 

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent {
  /**
   * This authentication request object will be updated when the user
   * edits the login form. It will then be sent to the API.
   */
  authRequest: AuthRequest;

  /**
   * If true, it means that the authentication API has return a failed response
   * (probably because the name or password is incorrect).
   */
  loginError: boolean;

  constructor(private auth: AuthService, private router: Router, 
              private matSnackBar : MatSnackBar) {
    this.authRequest = new AuthRequest();
    this.loginError = false;
  }

  /**
   * Called when the login form is submitted.
   */
  onSubmit(form: NgForm) {
    // Only do something if the form is valid
    if (form.valid) {
      // Hide any previous login error.
      this.loginError = false;

      // Perform the authentication request to the API.
      this.auth.login(this.authRequest).subscribe({
        next: () => {
          this.router.navigateByUrl("/"), 
          this.openSnackBar('Welcome ! ', null); 

        },
        error: (err) => {
          this.loginError = true;
          this.openSnackBar('Authentication failed ! ', null); 
          //console.warn(`Authentication failed: ${err.message}`);
        },
      });
    }
  }

  openSnackBar(message, action) {
    this.matSnackBar.open(message, action, {duration: 2000}); 
  }
}
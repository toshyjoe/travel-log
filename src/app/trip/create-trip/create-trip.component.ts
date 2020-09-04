import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/security/auth.service';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/models/auth-request';
import { NgForm } from '@angular/forms';
import { TripService } from 'src/app/api/services/trip.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss']
})
export class CreateTripComponent  {

  authRequest: AuthRequest; 

  constructor(private trip: TripService, private router: Router) { 
    this.authRequest = new AuthRequest(); 
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if(form.valid) {
      
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/security/auth.service';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/models/auth-request';
import { NgForm } from '@angular/forms';
import { TripService } from 'src/app/api/services/trip.service';
import { Trip } from 'src/app/models/trip';
import { TripRequest } from 'src/app/models/trip-request';
import { SharedService } from 'src/app/api/services/shared.service';



@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss']
})
export class CreateTripComponent  {

  authRequest: AuthRequest; 
  tripRequest: TripRequest; 
  trip: Trip; 
  createTripError: boolean;
  hideToggle: string; 
  
 

  constructor(private tripService: TripService, 
              private router: Router, 
              private data : SharedService) { 

    this.authRequest = new AuthRequest(); 
    this.tripRequest = new TripRequest(); 
    this.trip = new Trip(); 
  }

  ngOnInit(): void {
  }

 
  onSubmit(form: NgForm) {
    
    if (form.valid) {
      this.createTripError = false;

      this.tripService.createTrip(this.tripRequest).subscribe({
        next: (newTrip) => {
          this.tripRequest = new TripRequest(); 
          
          form.form.reset; 
          this.data.newTrip(null); 

        },
        error: (err) => {
          this.createTripError = true;
          console.warn(`Trip creation failed: ${err.message}`);
        },
      });
    }
  }

}

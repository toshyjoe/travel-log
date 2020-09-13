import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/security/auth.service';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/models/auth-request';
import { NgForm } from '@angular/forms';
import { TripService } from 'src/app/api/services/trip.service';
import { Trip } from 'src/app/models/trip';
import { TripRequest } from 'src/app/models/trip-request';



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
  
 

  constructor(private tripService: TripService, private router: Router) { 
    this.authRequest = new AuthRequest(); 
    this.tripRequest = new TripRequest(); 
    this.trip = new Trip(); 
    this.trip.title = ''; 
  }

  ngOnInit(): void {
  }

 

  submitForm(form: NgForm){
    if (form.valid) {
      console.log("Submitted ! "); 
    
      this.tripService.createTrip(this.trip); 

    }
    
  }

  onSubmit(form: NgForm) {
    // Only do something if the form is valid
    if (form.valid) {
      // Hide any previous login error.
      this.createTripError = false;

      
      console.log("1 . inside submited form !  ")


      // Perform the authentication request to the API.
      this.tripService.createTrip(this.tripRequest).subscribe({
        next: () => console.log("trip created ü  ! "),
        error: (err) => {
          this.createTripError = true;
          console.warn(`Trip creation failed: ${err.message}`);
        },
      });
    }
  }

}

import { Component,  OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from 'src/app/api/services/shared.service';
import { TripService } from 'src/app/api/services/trip.service';
import { AuthRequest } from 'src/app/models/auth-request';
import { Trip } from 'src/app/models/trip';
import { TripRequest } from 'src/app/models/trip-request';
import { MatSnackBar } from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.scss']
})
export class UpdateTripComponent implements OnInit {

  authRequest: AuthRequest; 
  tripRequest: TripRequest; 
  updateTripError: boolean;
  currentTrip: Trip; 
  
  constructor(private tripService: TripService, 
              private data : SharedService, 
              private matSnackBar : MatSnackBar
              ) { 

    this.authRequest = new AuthRequest(); 
    this.tripRequest = new TripRequest(); 
  }


  ngOnInit(): void {
    this.data.currentTrip.subscribe(trip => this.tripRequest.title = trip.title); 
    this.data.currentTrip.subscribe(trip => this.tripRequest.description = trip.description); 
  }


  onSubmit(form: NgForm) {
    //console.log("Formulaire update Trip soumis"); 
    // afficher la valeur d'un champ : 
    // console.log(form.control.value['description']); 

    if(form.valid) {

      this.updateTripError = false; 

      this.tripService.updateTrip(this.tripRequest).subscribe({
        next: (updatedTrip) => {
          this.tripRequest = new TripRequest(); 
          this.data.updateTrip(updatedTrip); 
          this.openSnackBar('Trip updated! ', null); 
        }, 
        error: (err) => {
          this.updateTripError = true; 
          this.openSnackBar('Trip update failed! ', null); 
          //console.warn(`Trip update failed: ${err.message}`);
        }
      })

    }
  }

  
  openSnackBar(message, action) {
    this.matSnackBar.open(message, action, {duration: 2000}); 
  }
}

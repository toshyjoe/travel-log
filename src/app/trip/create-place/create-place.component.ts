import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlaceService } from 'src/app/api/services/place.service';
import { SharedService } from 'src/app/api/services/shared.service';
import { AuthRequest } from 'src/app/models/auth-request';
import { Place } from 'src/app/models/place';
import { PlaceRequest } from 'src/app/models/place-request';
import { Trip } from 'src/app/models/trip';
import { MatSnackBar } from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.scss']
})
export class CreatePlaceComponent implements OnInit {

  authRequest: AuthRequest; 
  placeRequest: PlaceRequest; 
  place: Place; 
  createPlaceError: boolean; 
   selectedTrip: Trip; 

  constructor(private placeService: PlaceService, 
              private data : SharedService, 
              private matSnackBar : MatSnackBar) { 

        this.authRequest = new AuthRequest(); 
        this.placeRequest = new PlaceRequest(); 
        this.place = new Place(); 
        this.selectedTrip = new Trip(); 
    }

  ngOnInit(): void {
    this.data.currentTrip.subscribe(trip => this.selectedTrip = trip); 
  }

 
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.createPlaceError = false;
      //this.placeRequest.tripId = '4994a7c2-aefa-43b9-a504-9960c25bdd4d'; 
      this.placeRequest.tripId = this.selectedTrip.id; 


      this.placeService.createPlace(this.placeRequest).subscribe({
        next: () => {
          this.placeRequest = new PlaceRequest(); 
          
          form.form.reset; 
          this.data.newPlace(null); 
          this.openSnackBar('Place created! ', null); 

        },
        error: (err) => {
          console.log(" - inside submit place 3"); 
          console.log(err); 

          this.createPlaceError = true;
          this.openSnackBar('Place creation failed! ', null); 
          //console.warn(`Place creation failed: ${err.message}`);
        },
      });
    }
  }

  openSnackBar(message, action) {
    this.matSnackBar.open(message, action, {duration: 2000}); 
  }

}

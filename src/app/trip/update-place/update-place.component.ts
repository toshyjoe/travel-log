import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlaceService } from 'src/app/api/services/place.service';
import { SharedService } from 'src/app/api/services/shared.service';
import { AuthRequest } from 'src/app/models/auth-request';
import { Place } from 'src/app/models/place';
import { PlaceRequest } from 'src/app/models/place-request';

@Component({
  selector: 'app-update-place',
  templateUrl: './update-place.component.html',
  styleUrls: ['./update-place.component.scss']
})
export class UpdatePlaceComponent implements OnInit {


  authRequest: AuthRequest; 
  placeRequest: PlaceRequest; 
  updatePlaceError: boolean;
  currentPlace: Place; 

  constructor(private placeService: PlaceService, 
              private data : SharedService

    ) { 
    this.authRequest = new AuthRequest(); 
    this.placeRequest = new PlaceRequest(); }

  ngOnInit(): void {
      this.data.currentPlace.subscribe(place => this.placeRequest.name = place.name); 
      this.data.currentPlace.subscribe(place => this.placeRequest.description = place.description); 
      this.data.currentPlace.subscribe(place => this.placeRequest.pictureUrl = place.pictureUrl); 
      this.data.currentPlace.subscribe(place => this.placeRequest.location.coordinates[0] = place.location.coordinates[0]); 
      this.data.currentPlace.subscribe(place => this.placeRequest.location.coordinates[1] = place.location.coordinates[1]); 
  
  }


  

  onSubmit(form: NgForm) {
    //console.log("Formulaire update Trip soumis"); 
    // afficher la valeur d'un champ : 
    // console.log(form.control.value['description']); 

    if(form.valid) {

      this.updatePlaceError = false; 

      this.placeService.updatePlace(this.placeRequest).subscribe({
        next: (updatedPlace) => {
          this.placeRequest = new PlaceRequest(); 
          this.data.updatePlace(updatedPlace); 
        }, 
        error: (err) => {
          this.updatePlaceError = true; 
          console.warn(`Place update failed: ${err.message}`);
        }
      })
     

    }
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { PlaceService } from 'src/app/api/services/place.service';
import { SharedService } from 'src/app/api/services/shared.service';
import { TripService } from 'src/app/api/services/trip.service';
import { AuthRequest } from 'src/app/models/auth-request';
import { SearchTripRequest } from 'src/app/models/search-trip-request';
import { Trip } from 'src/app/models/trip';

@Component({
  selector: 'app-search-trip',
  templateUrl: './search-trip.component.html',
  styleUrls: ['./search-trip.component.scss']
})
export class SearchTripComponent implements OnInit {
  
  @ViewChild(MatAccordion) accordion: MatAccordion;
  
  authRequest: AuthRequest;
  searchTripRequest: SearchTripRequest; 
  searchTripError : boolean; 
  trips: Trip[]; 

  constructor(private tripService: TripService, 
    private data : SharedService) { 
    this.searchTripRequest = new SearchTripRequest(); 
  }

  ngOnInit(): void {
    this.trips = []; 
  }


  onSubmit(form: NgForm){
    
    if(form.valid) {

      this.searchTripError = false; 
      this.trips = []; 

      var params = this.searchTripRequest.getParams(); 
      params=params.replace(" ","+");

      console.log('PARAMS envoyés : ' + params); 

      this.tripService.searchTrip(params)
      .subscribe(
        trips => {trips.forEach(
            trip => {this.trips.push(trip)
            }
          ), 
        console.log(this.trips); 
        this.searchTripRequest.initObject(); 
      },
          err => {  /*gestion des erreurs à revoir */ 
            console.warn(`Les voyages n'ont pas pu être chargés! `, err); 
          }

      ); 


    }
  }

  onSelectedTrip(trip){
    this.data.changeTrip(trip); 
  }



}

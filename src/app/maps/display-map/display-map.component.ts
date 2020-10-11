import { Component,  OnInit } from '@angular/core';
import { Place } from 'src/app/models/place';
import { Trip } from 'src/app/models/trip';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/security/auth.service';
import { PlaceService } from 'src/app/api/services/place.service';
import { SharedService } from 'src/app/api/services/shared.service';

@Component({
  selector: 'app-display-map',
  templateUrl: './display-map.component.html',
  styleUrls: ['./display-map.component.scss']
})
export class DisplayMapComponent implements OnInit {

  latitude = 46.997613; 
  longitude = 6.938573; 
  
  currentTrip: Trip; 
  currentUser : User; 
  places: Place[] = []; 

  constructor(
    private authService: AuthService, 
    private data : SharedService, 
    private placeService: PlaceService) {
    this.authService.getUser().subscribe(user => this.currentUser = user);  
  }

  ngOnInit(): void {
    this.data.currentTrip.subscribe(trip => this.currentTrip = trip); 

    // charger la liste des places lorsqu'on sélectionne un trip
    this.data.currentTrip.subscribe(trip => 
      this.loadPlacesByTrip(trip.id)
      ); 
    ; 
  }

  onChoseLocation(event){
    this.latitude = event.coords.lat; 
    this.longitude = event.coords.lng; 
  }



  loadPlacesByTrip(tripId : String ) {

    this.places = []; 
    this.placeService.loadAllPlacesByTrip(tripId)
    .subscribe(
      places => {places.forEach(
        place => {this.places.push(place)
        }
      )}
    )
  }
}
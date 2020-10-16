import { Component,  Input,  OnInit, SimpleChanges } from '@angular/core';
import { Place } from 'src/app/models/place';
import { Trip } from 'src/app/models/trip';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/security/auth.service';
import { PlaceService } from 'src/app/api/services/place.service';
import { SharedService } from 'src/app/api/services/shared.service';
import { GeolocationService } from 'src/app/api/services/geolocation.service';

@Component({
  selector: 'app-display-map',
  templateUrl: './display-map.component.html',
  styleUrls: ['./display-map.component.scss']
})
export class DisplayMapComponent implements OnInit {

  latitude = 46.997613; // defaut si non géolocalisé
  longitude = 6.938573; 
  currentIndex : number; 
  
  currentTrip: Trip; 
  @Input() currentPlace: Place; 
  currentUser : User; 
  places: Place[] = []; 
  monLabel = "Mon label ici"; 

  constructor(
    private authService: AuthService, 
    private data : SharedService, 
    private placeService: PlaceService, 
    private geolocation: GeolocationService) {

      this.authService.getUser().subscribe(user => this.currentUser = user);  
      this.geolocation
        .getCurrentPosition()
        .then((position) => {
          this.longitude = position.coords.longitude; 
          this.latitude = position.coords.latitude; 
        })
        .catch((error) => {
          console.warn('Failed to locate user because ', error); 
        }); 
  }



  ngOnInit(): void {
    this.data.currentTrip.subscribe(trip => this.currentTrip = trip); 
    this.data.currentPlace.subscribe(place => this.currentPlace = place);     

    // charger la liste des places lorsqu'on sélectionne un trip
    this.data.currentTrip.subscribe(trip => 
      this.loadPlacesByTrip(trip.id) 
      ); 
    
      this.data.currentPlace.subscribe(place => { 
        this.latitude = place.location.coordinates[1], 
        this.longitude = place.location.coordinates[0] 
      }
        )
    
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
        },
      ), 
      this.latitude = places[0].location.coordinates[1], 
      this.longitude = places[0].location.coordinates[0] 
    }
    )
  }

  
  // Afficher les détails de Place lorsqu'on clique sur le marker
  onMarkerClick(selectedPlaceIndex){

    this.data.changePlace(this.places[selectedPlaceIndex]); 
  }






}
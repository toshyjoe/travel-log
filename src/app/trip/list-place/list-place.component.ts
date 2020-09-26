import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Place } from 'src/app/models/place';
import { Trip } from 'src/app/models/trip';
import { PlaceService } from 'src/app/api/services/place.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/security/auth.service';
import { SharedService } from 'src/app/api/services/shared.service';

@Component({
  selector: 'app-list-place',
  templateUrl: './list-place.component.html',
  styleUrls: ['./list-place.component.scss']
})
export class ListPlaceComponent implements OnInit {

  selectedPlace : Place; 
  places: Place[] = []; 
  @Input() selectedTrip: Trip; 
  currentUser : User; 
  isTripOfUser : boolean; 

  constructor(
        private placeService: PlaceService, 
        private authService: AuthService, 
        private data : SharedService) { 

    this.authService.getUser().subscribe(user => this.currentUser = user); 

  }

  ngOnInit(): void { 
  }


  // Recharge la liste des places lorsqu'un autre Trip est sélectionné 
  //   -> lorsque l'Input selectedTrip change 
  ngOnChanges(changes: SimpleChanges) {
    if (this.selectedTrip != null) {
      this.loadPlacesByTrip(changes.selectedTrip.currentValue.id); 
      if (this.selectedTrip.userId == this.currentUser.id) {
        this.isTripOfUser = true; 
      }
      else {
        this.isTripOfUser = false; 
      }
    }
    /* 
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(changes.selectedTrip.currentValue.id);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }*/
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


  onPlaceSelected(place: Place){
    this.selectedPlace = place; 
    this.data.changePlace(place); 
  }
  

}

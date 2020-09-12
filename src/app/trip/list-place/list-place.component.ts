import { Component, OnInit, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { Place } from 'src/app/models/place';
import { Trip } from 'src/app/models/trip';
import { PlaceService } from 'src/app/api/services/place.service';

@Component({
  selector: 'app-list-place',
  templateUrl: './list-place.component.html',
  styleUrls: ['./list-place.component.scss']
})
export class ListPlaceComponent implements OnInit {

  places: Place[] = []; 
  @Input() selectedTrip: Trip; 

  constructor(private placeService: PlaceService) { 
    // this.trip.id = '0ddf3f48-1f05-4d2f-bf51-dc11307ab11b'; 
   
  }

  ngOnInit(): void { 
  }


  // Recharge la liste des places lorsqu'un autre Trip est sélectionné 
  //   -> lorsque l'Input selectedTrip change 
  ngOnChanges(changes: SimpleChanges) {
    this.loadPlacesByTrip(changes.selectedTrip.currentValue.id); 
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


  

}

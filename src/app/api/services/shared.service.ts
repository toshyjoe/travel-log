import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Place } from 'src/app/models/place';
import { Trip } from 'src/app/models/trip';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private sharedTrip = new BehaviorSubject<Trip>(new Trip()); 
   currentTrip = this.sharedTrip.asObservable(); 

  private sharedNewTrip = new BehaviorSubject<Trip>(new Trip()); 
    currentNewTrip = this.sharedNewTrip.asObservable(); 

  private sharedDeletedTrip = new Subject<Trip>(); 
   currentDeletedTrip = this.sharedDeletedTrip.asObservable(); 

  private shareUpdatedTrip = new BehaviorSubject<Trip>(new Trip()); 
  currentUpdatedTrip = this.shareUpdatedTrip.asObservable(); 

  private sharedPlace = new BehaviorSubject<Place>(new Place()); 
   currentPlace = this.sharedPlace.asObservable(); 

  private sharedNewPlace = new BehaviorSubject<Place>(new Place()); 
    currentNewPlace = this.sharedNewPlace.asObservable(); 

  private sharedDeletedPlace = new Subject<Place>(); 
     currentDeletedPlace = this.sharedDeletedPlace.asObservable(); 
   

  constructor() { }


  // TRIPS 

  changeTrip(trip: Trip){
    // 'next()' used to send data 
    this.sharedTrip.next(trip) 
  }

  newTrip(trip: Trip){
    this.sharedNewTrip.next(trip) 
  }

  deletedTrip(trip: Trip){
    this.sharedDeletedTrip.next(trip); 
  }

  updateTrip(trip: Trip) {
    this.shareUpdatedTrip.next(trip); 
  }


  // PLACES 

  changePlace(place: Place){
    this.sharedPlace.next(place) 
  }

  newPlace(place: Place){
    this.sharedNewPlace.next(place) 
  }

  deletedPlace(place: Place){
    this.sharedDeletedPlace.next(place); 
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TripService } from 'src/app/api/services/trip.service';
import { Trip } from 'src/app/models/trip';
import { AuthService } from 'src/app/security/auth.service';
import { User } from 'src/app/models/user';
import { reject } from 'lodash';


@Component({
  selector: 'app-list-trip',
  templateUrl: './list-trip.component.html',
  styleUrls: ['./list-trip.component.scss']                                                                                    
})
export class ListTripComponent implements OnInit {

  selectedTrip: Trip; 
  trips: Trip[] = []; 
  user: User;   

  
  constructor(private tripService: TripService, private authService:AuthService) { 
  
  }


  ngOnInit(): void {

    // récupérer le user connecté pour passer 
    //   l'id en paramètre de loadAllTripsByUser 
    this.authService.getUser().subscribe(user => this.user = user); 

    this.tripService.loadAllTripsByUser(this.user.id)
    .subscribe(
      trips => {trips.forEach(
          trip => {this.trips.push(trip)
          }
        )}
    )

    /*
    this.tripService.loadAllTrips()
    .subscribe(
      trips => {trips.forEach(
          trip => {this.trips.push(trip)
          }
        )}
    ) */
  }

  onTripSelected(trip: Trip){
    this.selectedTrip = trip; 
  }


  // use lodash -> supprime un élément de la collection 
  // deletedTrip = Output de trip.component
  onTripDeleted(deletedTrip: Trip): void {
    this.trips = reject(
      this.trips, 
      (trip) => trip.id === deletedTrip.id 
    )
  }

 // récupérer dans le composant un élément qui est
    // instancié dans le template 
    // -> ngAfterViewInit() 

 // se passe à la desctruction d'un composant (et sa hiérarchie)
    //  par exemple lorsqu'on appelle une autre page et qu'un 
    //  nouveau composant vient en remplacer un, et qu'on veut exécuter
    //  un traitement avant sa desctruction - update d'autres données, etc.
    //  -> ngOnDestroy() 



}

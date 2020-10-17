import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { TripService } from 'src/app/api/services/trip.service';
import { Trip } from 'src/app/models/trip';
import { AuthService } from 'src/app/security/auth.service';
import { User } from 'src/app/models/user';
import { reject } from 'lodash';
import { SharedService } from 'src/app/api/services/shared.service';


@Component({
  selector: 'app-list-trip',
  templateUrl: './list-trip.component.html',
  styleUrls: ['./list-trip.component.scss']                                                                                    
})
export class ListTripComponent implements OnInit {

  selectedTrip: Trip; 
  trips: Trip[] = []; 
  user: User;   
  panelOpenState = false;
  deletedTrip: Trip; 
  currentTrip : Trip; 
  newTrip : Trip; 
  updateTrip : Trip; 
  isPanelOpen : boolean = false; 

  
  constructor(private tripService: TripService, 
              private authService:AuthService, 
              private data : SharedService) { 
  
  }


  ngOnInit(): void {
    // récupérer le user connecté 
    this.authService.getUser().subscribe(user => this.user = user); 

    // charger les Trips de l'utilisateur connecté
    this.loadAllTripsByUser(); 

    this.data.currentTrip.subscribe(trip => this.selectedTrip = trip); 

    // raffraichir la liste lorsqu'un Trip est deleted. 
    this.data.currentDeletedTrip.subscribe(
      trip => {
        this.deletedTrip = trip 
        if(this.deletedTrip != null) {
          this.loadAllTripsByUser(); 
        }
      }
      ); 

    // raffraichir la liste lorsqu'un Trip est créé. 
    this.data.currentNewTrip.subscribe(
      trip => {
        this.newTrip = trip, 
        this.closeExpansionPanel(); 
        if(this.newTrip == null) {
          this.loadAllTripsByUser(); 
        }
      }
    )
      

    // raffraichir la liste lorsqu'un Trip est updaté. 
    this.data.currentUpdatedTrip.subscribe(
      trip => {
        this.updateTrip = trip 
        if(this.updateTrip == null) {
          this.loadAllTripsByUser(); 
        }
      }
    )
  }


  closeExpansionPanel(){
    this.isPanelOpen = false; 
  }


  loadAllTripsByUser(){
    this.trips = []; 
    this.tripService.loadAllTripsByUser(this.user.id)
    .subscribe(
      trips => {trips.forEach(
          trip => {this.trips.push(trip)
          }
        )},
        err => {  /*gestion des erreurs à revoir */ 
          console.warn(`Les voyages n'ont pas pu être chargés! `, err); 
        }
    ); 
  }


  loadAllTrips(){
    this.trips = []; 
    this.tripService.loadAllTrips()
    .subscribe(
      trips => {trips.forEach(
          trip => {this.trips.push(trip)
          }
        )}
    )
  }


  onTripSelected(trip: Trip){
    this.selectedTrip = trip; 
    this.data.changeTrip(trip); 
  }


  // use lodash -> supprime un élément de la collection 
  // deletedTrip = Output de trip.component
  /* 
  onTripDeleted(deletedTrip: Trip): void {
    this.trips = reject(
      this.trips, 
      (trip) => trip.id === deletedTrip.id 
    ) 
  }*/

 // récupérer dans le composant un élément qui est
    // instancié dans le template 
    // -> ngAfterViewInit() 

 // se passe à la desctruction d'un composant (et sa hiérarchie)
    //  par exemple lorsqu'on appelle une autre page et qu'un 
    //  nouveau composant vient en remplacer un, et qu'on veut exécuter
    //  un traitement avant sa desctruction - update d'autres données, etc.
    //  -> ngOnDestroy() 



}

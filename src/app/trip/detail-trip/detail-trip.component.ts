import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { stringify } from 'querystring';
import { SharedService } from 'src/app/api/services/shared.service';
import { TripService } from 'src/app/api/services/trip.service';
import { Trip } from 'src/app/models/trip';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-detail-trip',
  templateUrl: './detail-trip.component.html',
  styleUrls: ['./detail-trip.component.scss']
})
export class DetailTripComponent implements OnInit {

  @Input() selectedTrip: Trip; 
  deleteError : boolean; 
  deleteSuccess : boolean; 
  currentTrip : Trip; 
  deletedTrip: Trip; 
  currentUser : User; 

  constructor(private tripService: TripService, 
              private data : SharedService, 
              private authService: AuthService) {
                
                this.deleteError = false;  
                this.deleteSuccess = false; 
                this.authService.getUser().subscribe(user => this.currentUser = user); 
   }


  ngOnInit(): void {
    this.data.currentTrip.subscribe(trip => this.currentTrip = trip); 
  }

  isTripOfUser() : boolean{
    let belongToUser : boolean; 
    belongToUser = false; 
    if (this.currentTrip.userId == this.currentUser.id) {
      belongToUser = true; 
    }
    return belongToUser; 
  }
  

  titleOfCurrentTrip() : string {
    return this.currentTrip.title; 
  }


  onDelete(){
    this.tripService.deleteTrip(this.currentTrip.id)
    .subscribe({
      next: () => {
        this.data.deletedTrip(this.currentTrip);  
        this.currentTrip = new Trip(); 
      }, 
      error: (err) => {
        console.warn(`Trip delete failed: ${err.message}`);
        this.deleteError = true; 

      }
    } ); 
  }



}

import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/api/services/shared.service';
import { TripService } from 'src/app/api/services/trip.service';
import { Place } from 'src/app/models/place';
import { Trip } from 'src/app/models/trip';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-detail-place',
  templateUrl: './detail-place.component.html',
  styleUrls: ['./detail-place.component.scss']
})
export class DetailPlaceComponent implements OnInit {

  
  deleteError : boolean; 
  deleteSuccess : boolean; 
  currentUser : User; 
  currentTrip : Trip; 
  currentPlace : Place; 

  constructor(private TripService: TripService, 
              private data : SharedService, 
              private authService: AuthService) { 

                this.deleteError = false;  
                this.deleteSuccess = false; 
                this.authService.getUser().subscribe(user => this.currentUser = user); 
  }

  ngOnInit(): void {
    this.data.currentTrip.subscribe(trip => this.currentTrip = trip); 
    this.data.currentPlace.subscribe(place => this.currentPlace = place); 
  }

  isTripOfUser() : boolean{
    let belongToUser : boolean; 
    belongToUser = false; 
    if (this.currentTrip.userId == this.currentUser.id) {
      belongToUser = true; 
    }
    return belongToUser; 
  }

  
  onDelete(){
    return null; 
  }
}

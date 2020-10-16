import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/api/services/place.service';
import { SharedService } from 'src/app/api/services/shared.service';
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
  showHideUpdateForm: Boolean; 

  constructor(private placeService: PlaceService, 
              private data : SharedService, 
              private authService: AuthService) { 

                this.deleteError = false;  
                this.deleteSuccess = false; 
                this.authService.getUser().subscribe(user => this.currentUser = user);  
                this.showHideUpdateForm = false; 
  }

  ngOnInit(): void {
    this.data.currentTrip.subscribe(trip => this.currentTrip = trip); 
//    this.data.currentPlace.subscribe(place => this.currentPlace = place); 
    this.data.currentPlace.subscribe(place => {
      if (place != null) {
        this.currentPlace = place; 
      }
      else{ 
        this.currentPlace = new Place(); 
      }
    }); 
  }

  showUpdateForm(){
    this.showHideUpdateForm = !this.showHideUpdateForm; 

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
    this.placeService.deletePlace(this.currentPlace.id)
    .subscribe({
      next: () => {
        this.data.deletedPlace(this.currentPlace); 
        this.currentPlace = new Place(); 
      }, 
      error: (err) => {
        console.warn(`Place delete failed: ${err.message}`);
        this.deleteError = true; 
      }

    })
    
  }
}

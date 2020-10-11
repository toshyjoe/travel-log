import { Component, Input, OnInit } from '@angular/core';
import { TripService } from '../api/services/trip.service';
import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthService } from '../security/auth.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @Input() selectedTrip : Trip; 
  currentUser : User; 

  constructor(private authService: AuthService) { 

  }

  ngOnInit(): void {
    
    this.authService.getUser().subscribe(user => this.currentUser = user);  
  }


}

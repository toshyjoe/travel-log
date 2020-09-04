import { Component, OnInit } from '@angular/core';
import { TripService } from '../api/services/trip.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  

  constructor(private tripService: TripService) { }

  ngOnInit(): void {
    this.tripService.loadAllTrips().subscribe({
      next: (trips) => console.log("Trips", trips), 
      error: (error) => console.warn("Error", error), 
    })
  }


}

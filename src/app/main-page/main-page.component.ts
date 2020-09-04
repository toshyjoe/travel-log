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
    //this.tripService.loadAllTrips().subscribe({
    this.tripService.loadAllTripsByUser('4994a7c2-aefa-43b9-a504-9960c25bdd4d').subscribe({
      next: (trips) => console.log("Trips", trips), 
      error: (error) => console.warn("Error", error), 
    })
  }


}

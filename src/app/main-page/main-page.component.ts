import { Component, Input, OnInit } from '@angular/core';
import { TripService } from '../api/services/trip.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @Input() selectedTrip : Trip; 

  constructor(private tripService: TripService) { 

  }

  ngOnInit(): void {
  }


}

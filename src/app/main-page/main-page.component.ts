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
  }


}

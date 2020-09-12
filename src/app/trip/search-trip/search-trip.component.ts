import { Component, OnInit } from '@angular/core';
import { AuthRequest } from 'src/app/models/auth-request';

@Component({
  selector: 'app-search-trip',
  templateUrl: './search-trip.component.html',
  styleUrls: ['./search-trip.component.scss']
})
export class SearchTripComponent implements OnInit {
  
  authRequest: AuthRequest;

  constructor() { }

  ngOnInit(): void {
  }

}

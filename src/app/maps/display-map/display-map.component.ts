import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-map',
  templateUrl: './display-map.component.html',
  styleUrls: ['./display-map.component.scss']
})
export class DisplayMapComponent implements OnInit {

  latitude = 51.678418; 
  longitude = 7.809007; 

  constructor() { }

  ngOnInit(): void {
  }

}

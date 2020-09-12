import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trip } from 'src/app/models/trip';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  @Input() trip: Trip; 
  @Output() selected: EventEmitter<Trip>; 
  @Output() deletedTrip: EventEmitter<Trip>; 

  constructor() {
    this.selected = new EventEmitter(); 
   }

  ngOnInit(): void {
  }

  onSelected(){
    this.selected.emit(this.trip); 
    //console.log(this.trip); 
  }


  // supprimera un trip de la collection de list-trip
  //  html -> <button (click)="deleteTrip()"> delete.. </>
  deleteTrip(): void {
    this.deletedTrip.emit(this.trip); 
  }
}

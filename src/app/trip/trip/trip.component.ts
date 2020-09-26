import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/api/services/shared.service';
import { Place } from 'src/app/models/place';
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

  constructor(private data : SharedService) {
    this.selected = new EventEmitter(); 
   }

  ngOnInit(): void {
  }

  onSelected(){
    this.selected.emit(this.trip); 
    this.data.changePlace(new Place()); 
    //console.log(this.trip); 
  }


  // supprimera un trip de la collection de list-trip
  //  html -> <button (click)="deleteTrip()"> delete.. </>
  deleteTrip(): void {
    this.deletedTrip.emit(this.trip); 
  }
}

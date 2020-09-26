import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  @Input() place: Place; 
  @Output() selected: EventEmitter<Place>; 
  @Output() deletedPlace: EventEmitter<Place>; 
  

  constructor() { 
    this.selected = new EventEmitter(); }

  ngOnInit(): void {
  }


  onSelected(){
    this.selected.emit(this.place); 
  }

  deletePlace(): void {
    this.deletedPlace.emit(this.place); 
  }
}

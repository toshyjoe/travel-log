import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchTripComponent } from './search-trip/search-trip.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { ListTripComponent } from './list-trip/list-trip.component';
import { MatListModule } from '@angular/material/list';
import { TripComponent } from './trip/trip.component';
import { ListPlaceComponent } from './list-place/list-place.component';
import { PlaceComponent } from './place/place.component';




@NgModule({
  declarations: [
    SearchTripComponent, 
    CreateTripComponent, 
    ListTripComponent, 
    ListPlaceComponent, 
    TripComponent, PlaceComponent],
  imports: [
    CommonModule, 
    MatListModule
  ], 
  exports: [
    CreateTripComponent, 
    ListTripComponent
  ], 
})
export class TripModule { }


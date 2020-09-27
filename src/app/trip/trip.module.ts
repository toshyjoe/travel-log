import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchTripComponent } from './search-trip/search-trip.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { ListTripComponent } from './list-trip/list-trip.component';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { TripComponent } from './trip/trip.component';
import { ListPlaceComponent } from './list-place/list-place.component';
import { PlaceComponent } from './place/place.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { DetailTripComponent } from './detail-trip/detail-trip.component';
import { CreatePlaceComponent } from './create-place/create-place.component';
import { DetailPlaceComponent } from './detail-place/detail-place.component';
import { UpdateTripComponent } from './update-trip/update-trip.component';
import { UpdatePlaceComponent } from './update-place/update-place.component';




@NgModule({
  declarations: [
    SearchTripComponent, 
    CreateTripComponent, 
    ListTripComponent, 
    ListPlaceComponent, 
    TripComponent, 
    PlaceComponent, 
    DetailTripComponent, 
    CreatePlaceComponent, 
    DetailPlaceComponent, UpdateTripComponent, UpdatePlaceComponent],
  imports: [
    CommonModule, 
    MatListModule, 
    MatExpansionModule, 
    MatFormFieldModule, 
    FormsModule
  ], 
  exports: [
    CreateTripComponent, 
    ListTripComponent, 
    ListPlaceComponent, 
    DetailTripComponent,
    DetailPlaceComponent
  ], 
})
export class TripModule { }


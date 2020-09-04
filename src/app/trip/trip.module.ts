import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchTripComponent } from './search-trip/search-trip.component';
import { CreateTripComponent } from './create-trip/create-trip.component';



@NgModule({
  declarations: [SearchTripComponent, CreateTripComponent],
  imports: [
    CommonModule
  ], 
  exports: [
    CreateTripComponent
  ], 
})
export class TripModule { }


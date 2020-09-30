import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TripModule } from '../trip/trip.module';
import { MatExpansionModule} from '@angular/material/expansion';
import { MainPageRoutingModule } from './main-page-routing.module'; 
import { MainPageComponent } from './main-page.component'; 
import { SecurityModule } from '../security/security.module'; 


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MatListModule ,
    MatButtonModule, 
    MatSidenavModule, 
    TripModule, 
    MatExpansionModule, 
    MainPageRoutingModule,
    SecurityModule
  ], 
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }

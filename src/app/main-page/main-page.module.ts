import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { TripModule } from '../trip/trip.module';
import { MatExpansionModule} from '@angular/material/expansion';
import { MainPageRoutingModule } from './main-page-routing.module'; 
import { MainPageComponent } from './main-page.component'; 
import { SecurityModule } from '../security/security.module'; 
import { MapsModule  } from '../maps/maps.module'; 
import { NotificationModule } from '../notification/notification.module'; 



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
    MatGridListModule,
    MainPageRoutingModule,
    SecurityModule, 
    MapsModule, 
    NotificationModule
  ], 
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }

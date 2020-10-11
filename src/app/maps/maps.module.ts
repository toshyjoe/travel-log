import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayMapComponent } from './display-map/display-map.component';
import { AgmCoreModule } from '@agm/core'; 



@NgModule({
  declarations: [DisplayMapComponent],
  imports: [
    CommonModule, 
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCFdUsgLSKvBr1Q8iTBy80Tryu7Hk91kjk'
    }
    )
  ], 
  exports: [
    DisplayMapComponent
  ]
})
export class MapsModule { }

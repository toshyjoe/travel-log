import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ApiTokenInterceptorService } from "./api/api-token-interceptor.service";
import { SecurityModule } from './security/security.module';
import { DummyPageComponent } from './dummy-page/dummy-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TripModule } from './trip/trip.module';
import { MainPageComponent } from './main-page/main-page.component'; 



@NgModule({
  declarations: [
    AppComponent,
    DummyPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    SecurityModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatSidenavModule, 
    TripModule
  ],
  providers: [ 
    {
      provide: HTTP_INTERCEPTORS, //Now all your API calls will have the Authorization header when the user is logged in.
      useClass: ApiTokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

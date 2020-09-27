import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ApiTokenInterceptorService } from "./api/api-token-interceptor.service";
import { SecurityModule } from './security/security.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule} from '@angular/forms'; 
import { MainPageModule } from './main-page/main-page.module'; 



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    SecurityModule, 
    BrowserAnimationsModule, 
    FormsModule, 
    MainPageModule
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

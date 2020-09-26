import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Place } from 'src/app/models/place';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/security/auth.service';
import { PlaceRequest } from 'src/app/models/place-request';
import { PlaceResponse } from 'src/app/models/place-response';
import { map } from 'rxjs/operators';


const apiUrl = "https://masrad-2020-tl-anthony.herokuapp.com/api";

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  public selectedPlace : Place; 
  userToken: String; 
  header:    HttpHeaders; 

  constructor(private http: HttpClient, private authService:AuthService) {
    
    this.authService.getToken().subscribe(token => this.userToken = token);

   }

  

  loadAllPlacesByTrip(tripId : String): Observable<Place[]> {
    return this.http
    .get<Place[]>(`${apiUrl}/places?include=trip.user&trip=${tripId}`)
  }





  createPlace(placeRequest: PlaceRequest): Observable<Place> {
    this.header = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${this.userToken}`
    })

    return this.http
     .post<PlaceResponse>(`${apiUrl}/places`, placeRequest, { headers:this.header})
     .pipe(
       map((response) => {
        console.log(response)
        return response.place; 
       })
     );   
  }



  public deletePlace(placeId : String) : Observable<{}> {
    return this.http
      .delete(`${apiUrl}/places/${placeId}`); 
  }


}

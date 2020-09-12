import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from 'src/app/models/place';
import { Observable } from 'rxjs';


const apiUrl = "https://masrad-2020-tl-anthony.herokuapp.com/api";

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  

  loadAllPlacesByTrip(tripId : String): Observable<Place[]> {
    return this.http
    .get<Place[]>(`${apiUrl}/places?include=trip.user&trip=${tripId}`)
    
  }


}

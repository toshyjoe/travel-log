import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from 'src/app/models/trip';


const apiUrl = "https://masrad-2020-tl-anthony.herokuapp.com/api";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  public selectedTrip : Trip; 

  constructor(private http: HttpClient) { }

  loadAllTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${apiUrl}/trips?include=user`)
  }

  loadAllTripsByUser(userId : String): Observable<Trip[]> {
    return this.http
    .get<Trip[]>(`${apiUrl}/trips?include=user&user=${userId}`)
    
  }

  loadTripById(userId : String): Observable<Trip> {
    return this.http.get<Trip>(`${apiUrl}/trips?include=user&id=${userId}`)
  }

}




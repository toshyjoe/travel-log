import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from 'src/app/models/trip';
import { AuthService } from 'src/app/security/auth.service';
import { TripRequest } from 'src/app/models/trip-request';
import { TripResponse } from 'src/app/models/trip-response';
import { catchError, map, tap } from 'rxjs/operators';
import { SharedService } from './shared.service';


const apiUrl = "https://masrad-2020-tl-anthony.herokuapp.com/api";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  public selectedTrip : Trip; 
  userToken: String; 
  currentTrip: Trip; 
  header: HttpHeaders; 

  constructor(private http: HttpClient, private authService:AuthService, private data : SharedService) { 
    
    this.authService.getToken().subscribe(token => this.userToken = token); 
    this.data.currentTrip.subscribe(trip => this.currentTrip = trip); 
  }

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





  createTrip(tripRequest: TripRequest): Observable<Trip> {
    this.header = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${this.userToken}`
    })
    return this.http
     .post<TripResponse>(`${apiUrl}/trips`, tripRequest, { headers:this.header})
     .pipe(
       map((response) => {
        console.log(response)
        return response.trip; 
       })
     );   
  }

  updateTrip(tripRequest: TripRequest): Observable<Trip> {

    this.header = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${this.userToken}`
    })
    return this.http
     .patch<TripResponse>(`${apiUrl}/trips/${this.currentTrip.id}`, tripRequest, { headers:this.header})
     .pipe(
       map((response) => {
        console.log(response)
        return response.trip; 
       })
     );  
  }



  public deleteTrip(tripId : String) : Observable<{}> {
    return this.http
      .delete(`${apiUrl}/trips/${tripId}`); 
  }







}




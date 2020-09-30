import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "src/app/models/user";
import { UserResponse } from 'src/app/models/user-response';
import { UserRequest } from 'src/app/models/user-request';
import { map } from 'rxjs/operators';


const apiUrl = "https://masrad-2020-tl-anthony.herokuapp.com/api";

@Injectable({
  providedIn: "root",
})
export class UserService {



  constructor(private http: HttpClient) {}

  loadAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrl}/users`);
  }

  createUser(userRequest: UserRequest): Observable<User> {
    return this.http
    .post<UserResponse>(`${apiUrl}/users`, userRequest)
    .pipe(
      map((response) => {
        console.log("User created"); 
        console.log(response); 
        return response.user; 
      })
    )
    }
  
}
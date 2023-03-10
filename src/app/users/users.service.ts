import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly API = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  list(): Observable<User[]>{
    return this.http.get<User[]>(this.API);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly API = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  list(): Observable<User[]>{
    return this.http.get<User[]>(this.API);
  }
  findOne(id: number): Observable<User> {
    const url = `${this.API}/${id}`;
    return this.http.get<User>(url).pipe(
      map((response: User) => {
        const user: User = {
          id: response.id,
          user: response.user,
          name: response.name,
          password: response.password,
          role: response.role
        };
        return user;
      })
    );
  }
}

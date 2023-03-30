import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { User } from 'src/app/_shared/models/User';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private http: HttpClient) {}

  list(): Observable<User[]> {
    return of();
  }
  findOne(id: number): Observable<User> {
    const url = ``;
    return this.http.get<User>(url).pipe(
      map((response: User) => {
        const user: User = {
          id: response.id,
          user: response.user,
          name: response.name,
          password: response.password,
          role: response.role,
        };
        return user;
      })
    );
  }

  delete(id: number) {
    return this.http.delete<User>(``);
  }

  save(user: User): Observable<User> {
    return of();
  }

  update(user: User): Observable<User> {
    return of();
  }
}

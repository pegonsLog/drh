import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/_shared/models/User';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //private readonly API = `${environment.API}users`;
  private readonly API = `${environment.API}users`;

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

  delete(id: number) {
    return this.http.delete<User>(`${this.API}/${id}`);
  }

  save(user: User): Observable<User> {
    return this.http.post<User>(this.API, user);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.API}/${user.id}`, user);
  }
}

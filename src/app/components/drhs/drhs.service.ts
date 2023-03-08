import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { Drh } from 'src/app/shared/model/drh';
import { User } from 'src/app/shared/model/user';

@Injectable({
  providedIn: 'root',
})
export class DrhsService {
  private readonly APIDRH = 'http://localhost:3000/drhs';
  private readonly APIUSERS = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  list(): Observable<Drh[]> {
    return this.http.get<Drh[]>(this.APIDRH);
  }

  findAdm(): Observable<User[]> {
    return this.http
      .get<User[]>(this.APIUSERS)
      .pipe(
        first(),
        map((users: User[]) => users.filter((user: User) => user.role ==='adm'))
      );
  }
}

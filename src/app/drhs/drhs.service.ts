import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { Drh } from 'src/app/shared/model/drh';
import { User } from 'src/app/shared/model/user';

@Injectable({
  providedIn: 'root',
})
export class DrhsService {
  private readonly API = 'http://localhost:3000/drhs';

  constructor(private http: HttpClient) {}

  list(): Observable<Drh[]> {
    return this.http.get<Drh[]>(this.API);
  }
}

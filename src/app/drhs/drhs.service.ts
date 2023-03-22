import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Drh } from 'src/app/_shared/models/Drh';

@Injectable({
  providedIn: 'root',
})
export class DrhsService {
  private readonly API = 'http://localhost:3000/drhs';

  constructor(private http: HttpClient) {}

  listDrh(): Observable<Drh[]> {
    return this.http.get<Drh[]>(this.API);
  }

  findOne(id: number): Observable<Drh> {
    const url = `${this.API}/${id}`;
    return this.http.get<Drh>(url).pipe(
      map((response: Drh) => {
        const drh: Drh = {
          id: response.id,
          registration: response.registration,
          period: response.period,
          date: response.date,
        };
        return drh;
      })
    );
  }

  delete(id: number): Observable<Drh> {
    return this.http.delete<Drh>(`${this.API}/${id}`);
  }

  save(drh: Drh): Observable<Drh> {
    return this.http.post<Drh>(this.API, drh);
  }

  update(drh: Drh): Observable<Drh> {
    return this.http.put<Drh>(this.API, drh);
  }
}

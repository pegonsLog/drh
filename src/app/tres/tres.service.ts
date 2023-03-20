import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Tre } from 'src/app/shared/model/Tre';

@Injectable({
  providedIn: 'root'
})
export class TresService {

  private readonly API = "http://localhost:3000/tres";

  constructor(private http: HttpClient) { }

  list(): Observable<Tre[]>{
    return this.http.get<Tre[]>(this.API);
  }

  findOne(id: number): Observable<Tre> {
    const url = `${this.API}/${id}`; 
    return this.http.get<Tre>(url).pipe(
      map((response: Tre) => {
        const tre: Tre = {
          id: response.id,
          registration: response.registration,
          year: response.year,
          date: response.date,
        };
        return tre;
      })
    );
  }
}

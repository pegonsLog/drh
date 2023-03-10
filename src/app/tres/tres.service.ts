import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tre } from 'src/app/shared/model/tre';

@Injectable({
  providedIn: 'root'
})
export class TresService {

  private readonly API = "http://localhost:3000/tres";

  constructor(private http: HttpClient) { }

  list(): Observable<Tre[]>{
    return this.http.get<Tre[]>(this.API);
  }
}

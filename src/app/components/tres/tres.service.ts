import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TresService {

  private readonly API = `${environment.apiUrl}/tres`;

  constructor(private http: HttpClient) { }
}

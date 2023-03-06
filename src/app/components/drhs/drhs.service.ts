import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DrhsService {

  private readonly API = `${environment.apiUrl}/drhs`;

  constructor(private http: HttpClient) { }
}

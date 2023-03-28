import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { collection, DocumentData, getDocs, getFirestore } from 'firebase/firestore';
import { map, Observable } from 'rxjs';
import { Drh } from 'src/app/_shared/models/Drh';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DrhsService {

  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);

  private readonly API = `${environment.API}drhs`;

  constructor(private http: HttpClient) {}

  // listDrh(): Observable<Drh[]> {
  //   return this.http.get<Drh[]>(this.API);
  // }

  list(): Observable<Drh[]> {
    const drhs = collection(this.db, 'drhs');
    return new Observable<DocumentData[]>((subscriber) => {
      getDocs(drhs)
        .then((drhsSnapshot) => {
          const drhsList = drhsSnapshot.docs.map((doc) => doc.data());
          subscriber.next(drhsList);
          subscriber.complete();
        })
        .catch((error) => {
          subscriber.error(error);
        });
    }).pipe(map((drhsList) => drhsList as Drh[]));
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
    return this.http
      .put<Drh>(`${this.API}/${drh.id}`, drh)
      .pipe();
  }
}

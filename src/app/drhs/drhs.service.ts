import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  deleteDoc,
  DocumentData,
  getDocs,
  getFirestore,
} from 'firebase/firestore';
import { map, Observable } from 'rxjs';
import { Drh } from 'src/app/_shared/models/Drh';
import { environment } from 'src/environments/environment';
import { doc, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class DrhsService {
  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);

  drh: Drh = {
    id: 0,
    registration: '',
    period: '',
    date: '',
  };

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

  async delete(drh: Drh) {
    await deleteDoc(doc(this.db, 'drhs', ''));
  }

  // save(drh: Drh): Observable<Drh> {
  //   return this.http.post<Drh>(this.API, drh);
  // }

  async save(drh: Drh) {
    await addDoc(collection(this.db, 'drhs'), {
      registration: drh.registration,
      period: drh.period,
      date: drh.date,
    });
  }

  update(drh: Drh): Observable<Drh> {
    return this.http.put<Drh>(`${this.API}/${drh.id}`, drh).pipe();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { collection, DocumentData, getDocs, getFirestore } from 'firebase/firestore';
import { map, Observable } from 'rxjs';
import { Tre } from 'src/app/_shared/models/Tre';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TresService {


  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);

  private readonly API = `${environment.API}tres`;

  constructor(private http: HttpClient) { }

  // list(): Observable<Tre[]>{
  //   return this.http.get<Tre[]>(this.API);
  // }


  list(): Observable<Tre[]> {
    const tres = collection(this.db, 'tres');
    return new Observable<DocumentData[]>((subscriber) => {
      getDocs(tres)
        .then((tresSnapshot) => {
          const tresList = tresSnapshot.docs.map((doc) => doc.data());
          subscriber.next(tresList);
          subscriber.complete();
        })
        .catch((error) => {
          subscriber.error(error);
        });
    }).pipe(map((tresList) => tresList as Tre[]));
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

  delete(id: number) {
    return this.http.delete<Tre>(`${this.API}/${id}`);
  }

  save(tre: Tre): Observable<Tre> {
    return this.http.post<Tre>(this.API, tre);
  }

  update(tre: Tre): Observable<Tre> {
    return this.http.put<Tre>(`${this.API}/${tre.id}`, tre);
  }
}

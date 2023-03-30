import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from 'firebase/firestore';

import { Drh } from 'src/app/_shared/models/Drh';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrhsService {

  drhs: Drh[] = [];

  constructor(private firestore: Firestore) {}

  list(): Observable<Drh[]> {
    return of(this.drhs);
  }

  findOne(id: string): Observable<Drh> {
    return of()
  }

  delete(id: string) {}

  addDrh(drh: Drh) {
   let $drhRef = collection(this.firestore, 'drhs');
   return addDoc($drhRef, drh);
  }

  update(drh: Drh) {}
}

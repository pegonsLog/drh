import { Injectable } from '@angular/core';

import {
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  Firestore,
  setDoc
} from '@angular/fire/firestore';
import { deleteDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Drh } from 'src/app/_shared/models/Drh';

@Injectable({
  providedIn: 'root',
})
export class DrhsService {
  constructor(private firestore: Firestore) {}

  list() {
    let $drhRef = collection(this.firestore, 'drhs');
    return collectionData($drhRef, { idField: 'id' }) as Observable<Drh[]>;
  }

  findOne(id: string) {
    let $drhRef = doc(this.firestore, 'drhs/' + id);
    return docData($drhRef, {idField: 'id'}) as Observable<Drh>;
  }

  delete(id: string) {
    let $drhRef = doc(this.firestore, 'drhs/' + id);
    return deleteDoc($drhRef);
  }

  addDrh(drh: Drh) {
    let $drhRef = collection(this.firestore, 'drhs');
    return addDoc($drhRef, drh);
  }

  update(drh: Drh, id: string) {
    let $drhRef = doc(this.firestore, 'drhs/' + id);
    return setDoc($drhRef, drh);
  }
}

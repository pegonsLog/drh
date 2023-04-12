import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Facultativo } from '../_shared/models/Facultativo';

@Injectable({
  providedIn: 'root',
})
export class FacultativoService {
  constructor(private firestore: Firestore) {}

  list() {
    let $facultativoRef = collection(this.firestore, 'facultativos');
    return collectionData($facultativoRef, { idField: 'id' }) as Observable<
      Facultativo[]
    >;
  }

  findOne(id: string) {
    let $facultativoRef = doc(this.firestore, 'facultativos/' + id);
    return docData($facultativoRef, {
      idField: 'id',
    }) as Observable<Facultativo>;
  }

  delete(id: string) {
    let $facultativoRef = doc(this.firestore, 'facultativos/' + id);
    return deleteDoc($facultativoRef);
  }

  addFacultativo(facultativo: Facultativo) {
    let $facultativoRef = collection(this.firestore, 'facultativos');
    return addDoc($facultativoRef, facultativo);
  }

  update(facultativo: Facultativo, id: string) {
    let $facultativoRef = doc(this.firestore, 'facultativos/' + id);
    return setDoc($facultativoRef, facultativo);
  }
}

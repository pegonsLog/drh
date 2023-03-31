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
import { Tre } from '../_shared/models/Tre';

@Injectable({
  providedIn: 'root',
})
export class TresService {
  constructor(private firestore: Firestore) {}

  list() {
    let $treRef = collection(this.firestore, 'tres');
    return collectionData($treRef, { idField: 'id' }) as Observable<Tre[]>;
  }

  findOne(id: string) {
    let $treRef = doc(this.firestore, 'tres/' + id);
    return docData($treRef, { idField: 'id' }) as Observable<Tre>;
  }

  delete(id: string) {
    let $treRef = doc(this.firestore, 'tres/' + id);
    return deleteDoc($treRef);
  }

  addTre(tre: Tre) {
    let $treRef = collection(this.firestore, 'tres');
    return addDoc($treRef, tre);
  }

  update(tre: Tre, id: string) {
    let $treRef = doc(this.firestore, 'tres/' + id);
    return setDoc($treRef, tre);
  }
}

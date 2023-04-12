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
import { User } from 'src/app/_shared/models/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private firestore: Firestore) {}

  list() {
    let $userRef = collection(this.firestore, 'users');
    return collectionData($userRef, { idField: 'id' }) as Observable<User[]>;
  }
  findOne(id: string) {
    let $userRef = doc(this.firestore, 'users/' + id);
    return docData($userRef, { idField: 'id' }) as Observable<User>;
  }

  delete(id: string) {
    let $userRef = doc(this.firestore, 'users/' + id);
    return deleteDoc($userRef);
  }

  addUser(user: User) {
    let $userRef = collection(this.firestore, 'users');
    return addDoc($userRef, user);
  }

  update(user: User, id: string) {
    let $userRef = doc(this.firestore, 'users/' + id);
    return setDoc($userRef, user);
  }
}

import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, docData, addDoc, doc, setDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Escala } from '../_shared/models/Escala';

@Injectable({
  providedIn: 'root'
})
export class EscalasService {

  constructor(private firestore: Firestore) {}

  list() {
    let $escalaRef = collection(this.firestore, 'escalas');
    return collectionData($escalaRef, { idField: 'id' }) as Observable<Escala[]>;
  }

  findOne(id: string) {
    let $escalaRef = doc(this.firestore, 'escalas/' + id);
    return docData($escalaRef, {idField: 'id'}) as Observable<Escala>;
  }

  delete(id: string) {
    let $escalaRef = doc(this.firestore, 'escalas/' + id);
    return deleteDoc($escalaRef);
  }

  addEscala(escala: Escala) {
    let $escalaRef = collection(this.firestore, 'escalas');
    return addDoc($escalaRef, escala);
  }

  update(escala: Escala, id: string) {
    let $escalaRef = doc(this.firestore, 'escalas/' + id);
    return setDoc($escalaRef, escala);
  }
}

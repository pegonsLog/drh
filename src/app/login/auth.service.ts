import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import {
  collection, DocumentData, getDocs, getFirestore
} from 'firebase/firestore/lite';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/_shared/models/User';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);

  private readonly API = `${environment.API}users`;

  users: User[] = [];
  role: string = '';
  user: User = {
    id: 0,
    user: '',
    name: '',
    password: '',
    role: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  // list(): Observable<User[]> {
  //   // return of(this.users);
  //   return this.http.get<User[]>(this.API).pipe(first());
  // }

  list(): Observable<User[]> {
    const users = collection(this.db, 'users');
    return new Observable<DocumentData[]>((subscriber) => {
      getDocs(users)
        .then((usersSnapshot) => {
          const usersList = usersSnapshot.docs.map((doc) => doc.data());
          subscriber.next(usersList);
          subscriber.complete();
        })
        .catch((error) => {
          subscriber.error(error);
        });
    }).pipe(map((usersList) => usersList as User[]));
  }

  isAuthenticatedAdmDrh() {}

  isAuthenticatedUserDrh() {}

  isAuthenticatedAdmTre() {}

  isAuthenticatedUserTre() {}
}

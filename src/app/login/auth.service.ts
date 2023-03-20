import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { first, Observable } from 'rxjs';
import { User } from 'src/app/shared/model/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API = 'http://localhost:3000/users';

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

  list(): Observable<User[]> {
    return this.http.get<User[]>(this.API).pipe(first());
  }

  isAuthenticatedAdmDrh() {}

  isAuthenticatedUserDrh() {}

  isAuthenticatedAdmTre() {}

  isAuthenticatedUserTre() {}
}

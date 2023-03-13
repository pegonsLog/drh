import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API = 'http://localhost:3000/users';

  users: User[] = [];
  private userAuthenticatedDrh: boolean = false;
  private admAuthenticatedDrh: boolean = false;
  private userAuthenticatedTre: boolean = false;
  private admAuthenticatedTre: boolean = false;
  role: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  list(): Observable<User[]> {
    return this.http.get<User[]>(this.API);
  }

  doLoginDrh(user: string, password: string) {
    for (let usr of this.users) {
      if (usr.user === user && usr.password === password) {
        this.role = usr.role;
      }
    }

    if (this.role === 'user') {
      this.userAuthenticatedDrh = true;
      this.router.navigate(['/drhs/user']);
    }

    if (this.role === 'adm') {
      this.admAuthenticatedDrh = true;
      this.userAuthenticatedDrh = true;
      this.router.navigate(['/drhs/adm']);
    }
  }

  doLoginTre(user: string, password: string) {
    for (let usr of this.users) {
      if (usr.user === user && usr.password === password) {
        this.role = usr.role;
      }
    }
    if (this.role === 'user') {
      this.userAuthenticatedTre = true;
      this.router.navigate(['/tres/user']);
    }
    if (this.role === 'adm') {
      this.admAuthenticatedTre = true;
      this.userAuthenticatedTre = true;
      this.router.navigate(['/tres/adm']);
    }
  }
  isAuthenticatedAdmDrh() {
    return this.admAuthenticatedDrh;
  }

  isAuthenticatedUserDrh() {
    return this.userAuthenticatedDrh;
  }

  isAuthenticatedAdmTre() {
    return this.admAuthenticatedTre;
  }

  isAuthenticatedUserTre() {
    return this.userAuthenticatedTre;
  }
}

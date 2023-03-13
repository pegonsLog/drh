import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, of, map, Subscription } from 'rxjs';
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
  user: User = {
    user: '',
    name: '',
    password: '',
    role: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  list(): Observable<User[]> {
    return this.http.get<User[]>(this.API).pipe(first());
  }

  doLoginDrh(user: string, role: string) {
    if (role === 'user') {
      this.userAuthenticatedDrh = true;
      this.router.navigate(['drhs/user'], {
        queryParams: { user: user, role: role },
      });
    }

    if (role === 'adm') {
      console.log(role);
      this.admAuthenticatedDrh = true;
      this.router.navigate(['drhs/adm'], {
        queryParams: { user: user, role: role },
      });
    }
  }

  doLoginTre(user: string, role: string) {

    if (role === 'user') {
      this.userAuthenticatedTre = true;
      this.router.navigate(['tres/user'], {
        queryParams: { user: user, role: role },
      });

    }
    if (role === 'adm') {
      this.admAuthenticatedTre = true;
      this.router.navigate(['tres/adm'], {
        queryParams: { user: user, role: role },
      });
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

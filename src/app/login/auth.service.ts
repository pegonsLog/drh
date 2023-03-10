import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly API = 'http://localhost:3000/users';

  users: User[] = [];
  userAutenticated: boolean = false;
  user: string = '';
  userAuth: User = {
    user: '',
    name: '',
    password: '',
    role: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  list(): Observable<User[]> {
    return this.http.get<User[]>(this.API);
  }

  doLogin(user: string, password: string, type: string){

    for (let usr of this.users) {
      if (usr.user === user && usr.password === password) {
        this.userAuth = usr;
        // return this.userAutenticated = true;
      }
    }

    if (!this.userAuth.name) {
      alert('Usuário não cadastrado!');
    }

    if(this.userAuth.role === 'user'){
    if (this.userAuth && type === 'drh') {
      this.router.navigate(['/drhs'], {
        queryParams: { user: this.user},
      });
    }
    if (this.userAuth && type === 'tre') {
      this.router.navigate(['/tres'], {
        queryParams: { user: this.user },
      });
    }
    }
    if(this.userAuth.role === 'adm'){
      if (this.userAuth && type === 'drh') {
        this.router.navigate(['/drhs/adm'], {
          queryParams: { user: this.user, role: this.userAuth.role},
        });
      }
      if (this.userAuth && type === 'tre') {
        this.router.navigate(['/tres/adm'], {
          queryParams: { user: this.user, role: this.userAuth.role },
        });
      }
      }
  }
}

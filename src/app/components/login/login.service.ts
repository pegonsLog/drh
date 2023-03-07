import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  users: User[] = [];
  private readonly API = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  list(): Observable<User[]> {
    return this.http.get<User[]>(this.API);
  }
}

// auth: string = '';
// userLogin: User[] = [
//   { id: 1, user: '2023', name: 'Todos', password: '2023', role: 'user' },
//   { id: 2, user: '564', name: 'Pedro', password: '123456', role: 'adm' },
// ];
// userAuth(user: Partial<User>): string {
//   if (user.user === '2023' && user.password === '2023') {
//     this.auth = 'user';
//     return this.auth;
//   }
//   if (user.user === '564' && user.password === '123456') {
//     this.auth = 'adm';
//     return this.auth;
//   }
//   return '';
// }

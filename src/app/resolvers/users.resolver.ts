import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { User } from 'src/app/shared/models/User';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<User> {
  user: User = { id: 0, user: '', name: '', password: '', role: ''};
  constructor(private usersService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User>{
    if (route.params && route.params['id']) {
      const id: number = route.params['id'];
      return this.usersService
      .findOne(id)
      .pipe(map((user: User) => user));

    }
      return of(this.user);
  }
}

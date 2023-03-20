import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/User';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  user: string = '';
  password: string = '';
  userAuth: User = {
    id: 0,
    user: '',
    name: '',
    password: '',
    role: '',
  };

  users: User[] = [];
  subscription = new Subscription();

  constructor(
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) {
    this.subscription = this.authService
      .list()
      .subscribe((users: User[]) => (this.users = users));
  }

  drh(drh: string) {
    this.query(drh);
  }

  tre(tre: string) {
    this.query(tre);
  }

  query(type: string) {
    for (let usr of this.users) {
      if (usr.user === this.user && usr.password === this.password) {
        this.userAuth = usr;
      }
    }
    if (this.userAuth && this.userAuth.role === 'user') {
      this.router.navigate([`/${type}/user`], {
        queryParams: {
          name: this.userAuth.name,
          user: this.userAuth.user,
          role: this.userAuth.role,
        },
      });
    }
    if (this.userAuth && this.userAuth.role === 'adm') {
      this.router.navigate(['/administrations'], {
        queryParams: {
          name: this.userAuth.name,
          user: this.userAuth.user,
          role: this.userAuth.role,
        },
      });
    }
    if (this.user === '' || this.password === '') {
      alert('Usuário e/ou senha inválido(s)!');
      this.router.navigate(['']);
    }
  }

  clear() {
    this.user = '';
    this.password = '';
  }

  adm() {
    this.user = '2611';
    this.password = '0406';
  }

  userCommon() {
    this.user = '410';
    this.password = '410';
  }

  onError() {
    this.snackBar.open('Usuário ou senha inválidos!', 'X', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}

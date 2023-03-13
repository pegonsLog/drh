import { Component, OnDestroy } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/model/user';
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
    user: '',
    name: '',
    password: '',
    role: '',
  };

  users: User[] = [];
  subscription = new Subscription();

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) {
    this.authService.list().subscribe((users: User[]) => (this.users = users));
  }

  onSubmitDrh() {
    this.authService.doLoginDrh(this.user, this.password);
  }

  onSubmitTre() {
    this.authService.doLoginTre(this.user, this.password);
  }

  clear() {
    this.user = '';
    this.password = '';
  }

  adm() {
    this.user = '564';
    this.password = '564';
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

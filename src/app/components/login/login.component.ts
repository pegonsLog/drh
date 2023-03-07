import { Component, OnDestroy } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';
import { LoginService } from './login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  form: FormGroup;
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
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) {
    this.form = this.formBuilder.group({
      user: [''],
      password: [''],
    });

    this.loginService.list().subscribe((users: User[]) => (this.users = users));
  }

  onSubmit() {
    const userAuth = this.form.value;
    for (let user of this.users) {
      if (user.user === userAuth.user && user.password === userAuth.password) {
        this.userAuth = user;
      }
    }
    if (this.userAuth.name) {
      this.router.navigate(['/drhs'], {
        queryParams: { user: userAuth.user },
      });

    } else {
      alert('Usuário não cadastrado!');
      return;

    }
  }

  clear() {
    this.form.setValue({ user: '', password: '' });
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

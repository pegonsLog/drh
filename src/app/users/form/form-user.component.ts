import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_shared/models/User';
import { UsersService } from '../users.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnDestroy {
  userParam: User = {
    id: 0,
    user: '',
    name: '',
    password: '',
    role: '',
  };

  subscription: Subscription = new Subscription();

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.userParam = this.route.snapshot.data['user'];

    if (this.route.snapshot.queryParams['user']) {
      this.userParam.user = this.route.snapshot.queryParams['user'];
    }
  }

  onSubmit(user: User) {
    if (this.userParam.id !== 0) {
      this.update(user);
    } else {
      this.new(user);
    }
    this.clear();
  }

  voltar() {
    this.location.back();
  }

  clear() {
    this.userParam.user = '';
    this.userParam.name = '';
    this.userParam.password = '';
    this.userParam.role = '';
  }

  new(user: User) {
    this.subscription = this.usersService.save(user).subscribe(() => {
      if (!this.userParam.id) {
        this.location.back();
      }
    });
  }

  update(user: User) {
    this.subscription = this.usersService.update(user).subscribe();
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

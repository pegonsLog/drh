import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_shared/models/User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent {
  userParam: User = {
    id: '',
    user: '',
    name: '',
    password: '',
    role: '',
  };

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.userParam = this.route.snapshot.data['user'];

    if (this.route.snapshot.queryParams['user']) {
      this.userParam.user = this.route.snapshot.queryParams['user'];
      this.userParam.role = 'user';
    }
  }

  onNew(user: User) {
    this.usersService
      .addUser(user)
      .then(() => {
        this.router.navigate(['/users/list9dkj%&kkh7898&8jjj$5']);
        this.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onUpdate(id: string, user: User) {
    this.usersService
      .update(user, id)
      .then(() => {
        this.router.navigate(['/users/list9dkj%&kkh7898&8jjj$5']);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  voltar() {
    this.router.navigate(['/users/list9dkj%&kkh7898&8jjj$5']);
  }

  clear() {
    this.userParam.user = '';
    this.userParam.name = '';
    this.userParam.password = '';
    this.userParam.role = '';
  }
}

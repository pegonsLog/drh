import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/model/User';
import { UsersService } from '../users.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent {

  userParam: User = {
    id: 0,
    user: '',
    name: '',
    password: '',
    role: ''
  };

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    if(this.route.snapshot.queryParams['user']){
      this.userParam.user = this.route.snapshot.queryParams['user'];
    }
  }

  onSubmit() {}

  voltar() {
    this.location.back();
  }

}

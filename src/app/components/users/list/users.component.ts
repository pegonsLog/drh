import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  list_users$: Observable<User[]>;

  constructor(private usersService: UsersService) {
    this.list_users$ = this.usersService.list();
  }

  ngOnInit(){
// console.log(this.list_users$);
  }


}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/model/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit, OnDestroy {
  list: User[] = [];

  displayedColumns: string[] = ['user', 'name', 'password', 'role'];
  dataSource = this.list;

  subscription = new Subscription();

  constructor(private usersService: UsersService) {
    this.usersService.list().subscribe((users: any) => (this.list = users));
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/shared/model/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  // list_users$: Observable<User[]>;
  list: User[] = [];

  displayedColumns: string[] = ['user', 'name', 'password', 'role'];
  dataSource = this.list;

  subscription = new Subscription();

  constructor(private usersService: UsersService) {
    this.usersService.list().subscribe((users: any) => this.list = users);
  }

  ngOnInit(){
  }
  ngOnDestroy(){
    this.subscription.unsubscribe;
  }


}

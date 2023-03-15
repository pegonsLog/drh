import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  displayedColumns: string[] = ['user', 'name', 'password', 'role', 'actions'];
  dataSource = this.list;
  role: string;

  subscription = new Subscription();

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.usersService.list().subscribe((users: any) => (this.list = users));
    this.role = this.route.snapshot.queryParams['role'];
    console.log(this.role);
  }

  onSave() {
    this.router.navigate(['/users/new']);
  }

  voltar() {
    this.router.navigate(['/']);
  }

  edit() {
    console.log('Edit');
  }
  delete() {
    console.log('Delete');
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}

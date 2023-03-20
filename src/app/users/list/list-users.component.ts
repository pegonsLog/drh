import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent {
  list$: Observable<any>;

  displayedColumns: string[] = ['name', 'password', 'role', 'actions'];
  role: string;
  user: string;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.list$ = this.usersService.list();
    this.role = this.route.snapshot.queryParams['role'];
    this.user = this.route.snapshot.queryParams['user'];
  }

  onSave() {
    this.router.navigate(['/users/new']);
  }

  voltar() {
    this.location.back();
  }

  edit(id: string) {
    this.router.navigate(['/users/edit', id], {queryParams: {
      user: this.user
    }});
  }
  delete() {
    console.log('Delete');
  }
}

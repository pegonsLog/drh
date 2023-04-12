import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/_shared/dialogs/confirmation/confirmation.component';
import { User } from 'src/app/_shared/models/User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnDestroy {
  list$: Observable<any>;
  subscription: Subscription = new Subscription();

  user: User = {
    id: '',
    user: '',
    name: '',
    password: '',
    role: '',
  };

  displayedColumns: string[] = ['name', 'password', 'role', 'actions'];
  role: string;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.role = this.route.snapshot.queryParams['role'];
    this.user = this.route.snapshot.queryParams['user'];

    this.list$ = this.usersService.list().pipe(
      map((users: User[]) => {
        users.sort((a, b) => b.name!.localeCompare(a.name!));
        return users;
      })
    );
  }

  onSave() {
    this.router.navigate(['users/new9dkj%&kkh7898&8jjj$5']);
  }
  voltar() {
    this.router.navigate(['administrations'], {
      queryParams: { role: this.role, user: this.user },
    });
  }

  edit(id: string) {
    this.router.navigate(['users/edit', id], {
      queryParams: { role: this.role, user: this.user },
    });
  }

  delete(id: string) {
    const dialogReference = this.dialog.open(ConfirmationDialogComponent);
    this.subscription = dialogReference
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          this.usersService
            .delete(id)
            .then(() => {
              this.router.navigate(['/users/list9dkj%&kkh7898&8jjj$5']);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  }

  updateList() {
    this.usersService
      .list()
      .pipe(
        map((users: User[]) =>
          users.filter((user: any) => user.registration === this.user)
        )
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

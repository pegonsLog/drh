import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { UsersService } from '../users.service';
import { Location } from '@angular/common';
import { User } from 'src/app/_shared/models/User';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/_shared/dialogs/confirmation/confirmation.component';
import { collection, Firestore } from 'firebase/firestore';
import { collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnDestroy {
  list$: Observable<any>;

  user: User = {
    id: '',
    user: '',
    name: '',
    password: '',
    role: '',
  };

  displayedColumns: string[] = ['name', 'password', 'role', 'actions'];
  role: string;

  subscription: Subscription = new Subscription();

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    public dialog: MatDialog
  ) {
    this.list$ = this.usersService.list();
    this.role = this.route.snapshot.queryParams['role'];
    this.user = this.route.snapshot.queryParams['user'];
  }

  onSave() {
    this.router.navigate(['/users/new9dkj%&kkh7898&8(jjj$5']);
  }

  voltar() {
    this.router.navigate(['/administrations']);
  }

  edit(id: string) {
    this.router.navigate(['/users/edit', id], {
      queryParams: {
        user: this.user,
      },
    });
  }

  delete(id: number) {
    const dialogReference = this.dialog.open(ConfirmationDialogComponent);
    this.subscription = dialogReference
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          this.usersService.delete(id).subscribe(() => {
            this.updateList();
            this.router.navigate(['/users']);
          });
        }
      });
  }

  updateList() {
    this.list$ = this.usersService.list();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/_shared/dialogs/confirmation/confirmation.component';
import { Tre } from 'src/app/_shared/models/Tre';
import { TresService } from '../tres.service';

@Component({
  selector: 'app-list-adm-tres',
  templateUrl: './list-adm-tres.component.html',
  styleUrls: ['./list-adm-tres.component.scss'],
})
export class ListAdmTresComponent {
  list$: Observable<any>;

  matricula: string;
  name: string;
  role: string;
  subscription: Subscription = new Subscription();

  displayedColumns: string[] = ['year', 'date', 'actions'];

  constructor(
    private tresService: TresService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.matricula = this.route.snapshot.queryParams['user'];
    this.role = this.route.snapshot.queryParams['role'];
    this.name = this.route.snapshot.queryParams['name'];

    this.list$ = this.tresService
      .list()
      .pipe(
        map((tres: Tre[]) =>
          tres.filter((tre: any) => tre.registration === this.matricula)
          .sort((a, b) => b.year!.localeCompare(a.year!))
        )
      );
  }

  voltar() {
    this.router.navigate(['administrations'], {
      queryParams: { role: this.role, user: this.matricula, name: this.name },
    });
  }

  tre() {
    this.router.navigate(['tres/adm5Ft76#$78&8uio&8#80976'], {
      queryParams: { role: this.role, user: this.matricula, name: this.name },
    });
  }

  onSave() {
    this.router.navigate(['tres/new'], {
      queryParams: { role: this.role, user: this.matricula, name: this.name },
    });
  }

  onUsers() {
    this.router.navigate(['/users']);
  }

  edit(id: string) {
    this.router.navigate(['/tres/edit', id], {
      queryParams: { role: this.role, user: this.matricula, name: this.name },
    });
  }

  delete(id: string) {
    const dialogReference = this.dialog.open(ConfirmationDialogComponent);
    this.subscription = dialogReference
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          this.tresService
            .delete(id)
            .then(() => {
              this.router.navigate(['/tres/adm5Ft76#$78&8uio&8#80976']);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  }

  updateList() {
    this.tresService
      .list()
      .pipe(
        map((tres: Tre[]) =>
          tres.filter((tre: any) => tre.registration === this.matricula)
        )
      );
  }

}

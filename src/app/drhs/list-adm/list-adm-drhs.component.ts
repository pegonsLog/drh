import { Location } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/_shared/dialogs/confirmation/confirmation.component';
import { Drh } from 'src/app/_shared/models/Drh';
import { DrhsService } from '../drhs.service';

@Component({
  selector: 'app-list-adm-drhs',
  templateUrl: './list-adm-drhs.component.html',
  styleUrls: ['./list-adm-drhs.component.scss'],
})
export class ListAdmDrhsComponent implements OnDestroy {
  list$: Observable<any>;

  matricula: string;
  role: string;
  name: string;
  subscription: Subscription = new Subscription();

  displayedColumns: string[] = ['period', 'date', 'actions'];

  constructor(
    private drhsService: DrhsService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private location: Location
  ) {
    this.matricula = this.route.snapshot.queryParams['user'];
    this.role = this.route.snapshot.queryParams['role'];
    this.name = this.route.snapshot.queryParams['name'];

    this.list$ = this.drhsService
      .list()
      .pipe(
        map((drhs: Drh[]) =>
          drhs.filter((drh: any) => drh.registration === this.matricula)
          .sort((a, b) => b.period!.localeCompare(a.period!))
        )
      );
  }

  voltar() {
    this.router.navigate(['administrations'], {
      queryParams: { role: this.role, user: this.matricula },
    });
  }

  tre() {
    this.router.navigate(['tres/adm5Ft76#$78&8uio&8)#80976'], {
      queryParams: { role: this.role, user: this.matricula, name: this.name },
    });
  }

  onSave() {
    this.router.navigate(['drhs/new'], {
      queryParams: { role: this.role, user: this.matricula, name: this.name },
    });
  }

  onUsers() {
    this.router.navigate(['/users']);
  }

  edit(id: string) {
    this.router.navigate(['/drhs/edit', id], {
      queryParams: { role: this.role, user: this.matricula, name: this.name },
    });
  }

  delete(id: string) {
    const dialogReference = this.dialog.open(ConfirmationDialogComponent);
    this.subscription = dialogReference
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          this.drhsService
            .delete(id)
            .then(() => {
              this.router.navigate(['/drhs/adm5Ft76#$78&8uio&8#33356']);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  }

  updateList() {
    this.drhsService
      .list()
      .pipe(
        map((drhs: Drh[]) =>
          drhs.filter((drh: any) => drh.registration === this.matricula)
        )
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

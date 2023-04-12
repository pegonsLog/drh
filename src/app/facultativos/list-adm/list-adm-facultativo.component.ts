import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/_shared/dialogs/confirmation/confirmation.component';
import { Facultativo } from 'src/app/_shared/models/Facultativo';
import { FacultativoService } from '../facultativo.service';

@Component({
  selector: 'app-list-adm-facultativo',
  templateUrl: './list-adm-facultativo.component.html',
  styleUrls: ['./list-adm-facultativo.component.scss'],
})
export class ListAdmFacultativoComponent {
  list$: Observable<any>;

  matricula: string;
  role: string;
  name: string;
  subscription: Subscription = new Subscription();

  displayedColumns: string[] = ['day', 'date', 'actions'];

  constructor(
    private facultativoService: FacultativoService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.matricula = this.route.snapshot.queryParams['user'];
    this.role = this.route.snapshot.queryParams['role'];
    this.name = this.route.snapshot.queryParams['name'];

    this.list$ = this.facultativoService
      .list()
      .pipe(
        map((facultativos: Facultativo[]) =>
          facultativos
            .filter(
              (facultativo: any) => facultativo.registration === this.matricula
            )
            .sort((a, b) => b.day!.localeCompare(a.day!))
        )
      );
  }

  voltar() {
    this.router.navigate(['administrations'], {
      queryParams: { role: this.role, user: this.matricula },
    });
  }

  onSave() {
    this.router.navigate(['facultativos/new'], {
      queryParams: { role: this.role, user: this.matricula, name: this.name },
    });
  }

  onUsers() {
    this.router.navigate(['/users']);
  }

  edit(id: string) {
    this.router.navigate(['/facultativos/edit', id], {
      queryParams: { role: this.role, user: this.matricula, name: this.name },
    });
  }

  delete(id: string) {
    const dialogReference = this.dialog.open(ConfirmationDialogComponent);
    this.subscription = dialogReference
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          this.facultativoService
            .delete(id)
            .then(() => {
              this.router.navigate(['/facultativos/adm5Ft76#$78&8uio&8#33356']);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  }

  updateList() {
    this.facultativoService
      .list()
      .pipe(
        map((facultativos: Facultativo[]) =>
          facultativos.filter(
            (facultativo: any) => facultativo.registration === this.matricula
          )
        )
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

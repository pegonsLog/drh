import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/_shared/dialogs/confirmation/confirmation.component';
import { Escala } from 'src/app/_shared/models/Escala';
import { EscalasService } from 'src/app/escalas/escalas.service';

@Component({
  selector: 'app-list-adm',
  templateUrl: './list-adm.component.html',
  styleUrls: ['./list-adm.component.scss']
})
export class ListAdmEscalasComponent implements OnDestroy{
  list$: Observable<any>;

  matricula: string;
  role: string;
  name: string;
  subscription: Subscription = new Subscription();

  displayedColumns: string[] = ['month', 'year'];

  constructor(
    private escalasService: EscalasService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
  ) {
    this.matricula = this.route.snapshot.queryParams['user'];
    this.role = this.route.snapshot.queryParams['role'];
    this.name = this.route.snapshot.queryParams['name'];

    this.list$ = this.escalasService
      .list()
      .pipe(
        map((escalas: Escala[]) =>
          escalas.filter((escala: any) => escala.registration === this.matricula)
         // .sort((a, b) => b.month!.localeCompare(a.month!))
        )
      );
  }

  voltar() {
    this.router.navigate(['administrations'], {
      queryParams: { role: this.role, user: this.matricula },
    });
  }

  onDrh() {
    this.router.navigate(['drhs/adm5Ft76#$78&8uio&8#33356'], {
      queryParams: { role: this.role, user: this.matricula, name: this.name },
    });
  }

  onTre() {
    this.router.navigate(['tres/adm5Ft76#$78&8uio&8)#80976'], {
      queryParams: { role: this.role, user: this.matricula, name: this.name },
    });
  }
  onFacultativo() {
    this.router.navigate(['facultativos/adm5Ft76#$78&8uio&8#33356'], {
      queryParams: { role: this.role, user: this.matricula, name: this.name },
    });
  }

  onSave() {
    this.router.navigate(['escalas/new'], {
      queryParams: { role: this.role, user: this.matricula, name: this.name },
    });
  }

  onUsers() {
    this.router.navigate(['/users']);
  }

  edit(id: string) {
    this.router.navigate(['/escalas/edit', id], {
      queryParams: { role: this.role, user: this.matricula, name: this.name },
    });
  }

  delete(id: string) {
    const dialogReference = this.dialog.open(ConfirmationDialogComponent);
    this.subscription = dialogReference
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          this.escalasService
            .delete(id)
            .then(() => {
              this.router.navigate(['/escalas/adm5Ft76#$78&8uio&8#33356']);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  }

  updateList() {
    this.escalasService
      .list()
      .pipe(
        map((escalas: Escala[]) =>
          escalas.filter((escala: any) => escala.registration === this.matricula)
        )
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}


import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/dialogs/confirmation/confirmation.component';
import { Drh } from 'src/app/shared/models/Drh';
import { DrhsService } from '../drhs.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-list-adm-drhs',
  templateUrl: './list-adm-drhs.component.html',
  styleUrls: ['./list-adm-drhs.component.scss'],
})
export class ListAdmDrhsComponent {
  list$: Observable<any>;
  drh: Drh = {
    id: 0,
    registration: '',
    period: '',
    date: '',
  };
  matricula: string;
  role: string;
  name: string;

  displayedColumns: string[] = ['period', 'date', 'actions'];

  constructor(
    private drhsService: DrhsService,
    private route: ActivatedRoute,
    private router: Router,
    public dialogRef: MatDialog
  ) {
    this.matricula = this.route.snapshot.queryParams['user'];
    this.role = this.route.snapshot.queryParams['role'];
    this.name = this.route.snapshot.queryParams['name'];

    this.list$ = this.drhsService
      .listDrh()
      .pipe(
        map((drhs: Drh[]) =>
          drhs.filter((drh: any) => drh.registration === this.matricula)
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
      queryParams: { role: this.role, user: this.matricula },
    });
  }

  onUsers() {
    this.router.navigate(['/users']);
  }

  edit(id: number) {
    this.router.navigate(['/drhs/edit', id]);
  }

  delete(id: number) {
    const dialogReference = this.dialogRef.open(ConfirmationDialogComponent);
    dialogReference.afterClosed().subscribe((result: any) => {
      if (result) {
        this.drhsService.delete(id).subscribe((result) => {
          this.router.navigate(['/drhs/adm5Ft76#$78&8uio&8)#33356']);
        });
      }
    });
  }
}

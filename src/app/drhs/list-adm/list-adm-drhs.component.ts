import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { Drh } from 'src/app/shared/model/Drh';
import { DrhsService } from '../drhs.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-adm-drhs',
  templateUrl: './list-adm-drhs.component.html',
  styleUrls: ['./list-adm-drhs.component.scss'],
})
export class ListAdmDrhsComponent{
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
    private location: Location
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
      )
  }

  voltar() {
    this.location.back();
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
  delete() {
    console.log('Delete');
  }
}

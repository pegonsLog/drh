import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { Drh } from 'src/app/shared/model/Drh';
import { DrhsService } from '../drhs.service';

@Component({
  selector: 'app-list-user-drhs',
  templateUrl: './list-user-drhs.component.html',
  styleUrls: ['./list-user-drhs.component.scss'],
})
export class ListUsersDrhsComponent {
  list$: Observable<any>;
  matricula: string;
  displayedColumns: string[] = ['period', 'date'];
  
  constructor(
    private drhsService: DrhsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.matricula = this.route.snapshot.queryParams['user'];

    this.list$ = this.drhsService
      .listDrh()
      .pipe(
        map((drhs: Drh[]) =>
          drhs.filter((drh: any) => drh.registration === this.matricula)
        )
      )
  }
  voltar(){
  this.location.back();
  }
}

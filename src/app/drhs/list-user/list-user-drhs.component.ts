import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Drh } from 'src/app/_shared/models/Drh';
import { DrhsService } from '../drhs.service';

@Component({
  selector: 'app-list-user-drhs',
  templateUrl: './list-user-drhs.component.html',
  styleUrls: ['./list-user-drhs.component.scss'],
})
export class ListUsersDrhsComponent implements OnInit{
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
      .list()
      .pipe(
        map((drhs: Drh[]) =>
          drhs.filter((drh: any) => drh.registration === this.matricula)
        )
      )
  }
  voltar(){
  this.location.back();
  }

  ngOnInit(): void {
      console.log(this.list$);
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { Tre } from 'src/app/_shared/models/Tre';
import { TresService } from '../tres.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-user-tres',
  templateUrl: './list-user-tres.component.html',
  styleUrls: ['./list-user-tres.component.scss'],
})
export class ListUserTresComponent {
  list$: Observable<any>;

  matricula: string;

  displayedColumns: string[] = ['year', 'date'];

  constructor(
    private tresService: TresService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.matricula = this.route.snapshot.queryParams['user'];

    this.list$ = this.tresService
      .list()
      .pipe(
        map((drhs: Tre[]) =>
          drhs.filter((drh: any) => drh.registration === this.matricula)
        )
      );
  }

  voltar() {
    this.location.back();
  }
}

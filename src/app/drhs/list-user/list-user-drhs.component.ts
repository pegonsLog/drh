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
export class ListUsersDrhsComponent {
  list$: Observable<any>;
  matricula: string;
  displayedColumns: string[] = ['period', 'date'];

  constructor(
    private drhsService: DrhsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.matricula = this.route.snapshot.queryParams['user'];

    this.list$ = this.drhsService
      .list()
      .pipe(
        map((drhs: Drh[]) =>
          drhs
            .filter((drh: any) => drh.registration === this.matricula)
            .sort((a, b) => b.period!.localeCompare(a.period!))
        )
      );
  }
  voltar() {
    this.router.navigate(['/']);
  }

  escala() {
    this.router.navigate(['escalas/user'], {
      queryParams: { user: this.matricula },
    });
  }

  onTre() {
    this.router.navigate(['tres/user'], {
      queryParams: { user: this.matricula },
    });
  }
  onFacultativo() {
    this.router.navigate(['facultativos/user'], {
      queryParams: { user: this.matricula },
    });
  }
}

import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Tre } from 'src/app/_shared/models/Tre';
import { TresService } from '../tres.service';

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
          drhs
            .filter((drh: any) => drh.registration === this.matricula)
            .sort((a, b) => b.year!.localeCompare(a.year!))
        )
      );
  }

  voltar() {
    this.router.navigate(['/']);
  }

  onDrh() {
    this.router.navigate(['drhs/user'], {
      queryParams: { user: this.matricula },
    });
  }
  onFacultativo() {
    this.router.navigate(['facultativos/user'], {
      queryParams: { user: this.matricula },
    });
  }
}

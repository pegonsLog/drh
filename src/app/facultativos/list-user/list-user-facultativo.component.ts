import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Facultativo } from 'src/app/_shared/models/Facultativo';
import { FacultativoService } from '../facultativo.service';

@Component({
  selector: 'app-list-user-facultativo',
  templateUrl: './list-user-facultativo.component.html',
  styleUrls: ['./list-user-facultativo.component.scss'],
})
export class ListUserFacultativoComponent {
  list$: Observable<any>;
  matricula: string;
  displayedColumns: string[] = ['day', 'date'];

  constructor(
    private facultativoService: FacultativoService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.matricula = this.route.snapshot.queryParams['user'];

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
    this.router.navigate(['/']);
  }

  ngOnInit(): void {}

  onDrh() {
    this.router.navigate(['drhs/user'], {
      queryParams: { user: this.matricula },
    });
  }

  onTre() {
    this.router.navigate(['tres/user'], {
      queryParams: { user: this.matricula },
    });
  }
}

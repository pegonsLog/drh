import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Escala } from 'src/app/_shared/models/Escala';
import { EscalasService } from '../escalas.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserEscalasComponent {
  list$: Observable<any>;
  matricula: string;
  displayedColumns: string[] = ['month', 'year'];

  constructor(
    private escalasService: EscalasService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    this.matricula = this.route.snapshot.queryParams['user'];

    this.list$ = this.escalasService
      .list()
      .pipe(
        map((escalas: Escala[]) =>
          escalas
            .filter((escala: any) => escala.registration === this.matricula)
           // .sort((a, b) => b.month!.localeCompare(a.month!))
        )
      );
  }
  voltar() {
    this.location.back();
  }

  ngOnInit(): void {
    console.log(this.list$);
  }

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
  
  onFacultativo() {
    this.router.navigate(['facultativos/user'], {
      queryParams: { user: this.matricula },
    });
  }
}

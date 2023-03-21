import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { Tre } from 'src/app/shared/models/Tre';
import { TresService } from '../tres.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-adm-tres',
  templateUrl: './list-adm-tres.component.html',
  styleUrls: ['./list-adm-tres.component.scss'],
})
export class ListAdmTresComponent {
  list$: Observable<any>;

  matricula: string;
  name: string;
  role: string;

  displayedColumns: string[] = ['year', 'date', 'actions'];

  constructor(
    private tresService: TresService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.matricula = this.route.snapshot.queryParams['user'];
    this.role = this.route.snapshot.queryParams['role'];
    this.name = this.route.snapshot.queryParams['name'];

    this.list$ = this.tresService
      .list()
      .pipe(
        map((tres: Tre[]) =>
          tres.filter((tre: any) => tre.registration === this.matricula)
        )
      );
  }

  voltar() {
    this.router.navigate(['administrations'], {
      queryParams: { role: this.role, user: this.matricula},
    });
  }

  drh() {
    this.router.navigate(['drhs/adm5Ft76#$78&8uio&8)#33356'], {
      queryParams: { role: this.role, user: this.matricula, name: this.name },
    });
  }
  onSave() {
    this.router.navigate(['/tres/new'], {
      queryParams: { role: this.role, user: this.matricula },
    });
  }

  edit(id: number) {
    this.router.navigate(['/tres/edit', id]);
  }
  delete() {
    console.log('Delete');
  }

}

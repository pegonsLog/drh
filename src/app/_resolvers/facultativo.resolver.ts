import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Tre } from '../_shared/models/Tre';
import { Facultativo } from '../_shared/models/Facultativo';
import { FacultativoService } from '../facultativos/facultativo.service';

@Injectable({
  providedIn: 'root',
})
export class FacultativoResolver implements Resolve<Facultativo> {
  facultativo: Facultativo = { id: '', registration: '', day: '', date: '' };
  constructor(private facultativoService: FacultativoService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Facultativo> {
    if (route.params && route.params['id']) {
      return this.facultativoService
        .findOne(route.params['id'])
        .pipe(map((facultativo: Facultativo) => facultativo));
    }

    return of(this.facultativo);
  }
}

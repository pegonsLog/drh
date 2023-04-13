import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { Escala } from '../_shared/models/Escala';
import { EscalasService } from '../escalas/escalas.service';

@Injectable({
  providedIn: 'root',
})
export class EscalasResolver implements Resolve<Escala> {
  escala: Escala = { id: '', yearMonth: '', link: ''}
  constructor(private escalasService: EscalasService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Escala> {
    if (route.params && route.params['id']) {
      return this.escalasService
        .findOne(route.params['id'])
        .pipe(map((escala: Escala) => escala));
    }

    return of(this.escala);
  }
}

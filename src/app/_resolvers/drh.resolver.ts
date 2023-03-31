import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { DrhsService } from '../drhs/drhs.service';
import { Drh } from './../_shared/models/Drh';

@Injectable({
  providedIn: 'root',
})
export class DrhResolver implements Resolve<Drh> {
  drh: Drh = { id: '', registration: '', period: '', date: '' };
  constructor(private drhsService: DrhsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Drh> {
    if (route.params && route.params['id']) {
      return this.drhsService
        .findOne(route.params['id'])
        .pipe(map((drh: Drh) => drh));
    }

    return of(this.drh);
  }
}

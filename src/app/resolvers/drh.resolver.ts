import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { first, Observable, of, tap, map } from 'rxjs';
import { DrhsService } from '../drhs/drhs.service';
import { Drh } from 'src/app/shared/models/Drh';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class DrhResolver implements Resolve<Drh> {
  drh: Drh = { id: 0, registration: '', period: '', date: '' };
  constructor(private drhsService: DrhsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Drh>{
    if (route.params && route.params['id']) {
      const id: number = route.params['id'];
      return this.drhsService
      .findOne(id)
      .pipe(map((drh: Drh) => drh));

    }
      return of(this.drh);
  }
}

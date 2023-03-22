import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Drh } from 'src/app/_shared/models/Drh';
import { DrhsService } from '../drhs/drhs.service';

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

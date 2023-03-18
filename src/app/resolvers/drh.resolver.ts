import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { first, Observable, of } from 'rxjs';
import { DrhsService } from '../drhs/drhs.service';
import { Drh } from 'src/app/shared/model/drh';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class DrhResolver implements Resolve<Drh> {
  drh: Drh = { id: 0, registration: '', period: '', date: '' };
  constructor(private drhsService: DrhsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Drh>{
    if(route.params['id'] === 0){
      return of(this.drh);
    }
    if (route.params && route.params['id']) {
      const id: number = route.params['id'];
      this.drhsService
        .findOne(id)
        .pipe(first())
        .subscribe((data: Drh) => (this.drh = data));
      }
      return of(this.drh);
  }
}

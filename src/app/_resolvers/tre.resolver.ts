import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Tre } from 'src/app/_shared/models/Tre';
import { TresService } from '../tres/tres.service';

@Injectable({
  providedIn: 'root',
})
export class TreResolver implements Resolve<Tre> {
  tre: Tre = { id: '', registration: '', year: '', date: '' };
  constructor(private tresService: TresService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Tre> {
    if (route.params && route.params['id']) {
      return this.tresService
        .findOne(route.params['id'])
        .pipe(map((tre: Tre) => tre));
    }

    return of(this.tre);
  }
}

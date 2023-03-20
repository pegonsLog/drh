import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Tre } from 'src/app/shared/model/Tre';
import { TresService } from '../tres/tres.service';

@Injectable({
  providedIn: 'root',
})
export class TreResolver implements Resolve<Tre> {
  tre: Tre = { id: 0, registration: '', year: '', date: '' };
  constructor(private tresService: TresService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tre>{
    if (route.params && route.params['id']) {
      const id: number = route.params['id'];
      return this.tresService
      .findOne(id)
      .pipe(map((tre: Tre) => tre));

    }
      return of(this.tre);
  }
}

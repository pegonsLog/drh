import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthCommonGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.authService.isAuthenticatedUserDrh()) {
      this.router.navigate(['/drhs/user']);
      return true;
    }
    if (this.authService.isAuthenticatedUserTre()) {
      this.router.navigate(['/tres/user']);
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthAdmGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.authService.isAuthenticatedAdmDrh()) {
      this.router.navigate(['/drhs/adm']);
      return true;
    }
    if (this.authService.isAuthenticatedAdmTre()) {
      this.router.navigate(['/tres/adm']);
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}

import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authServise: AuthService,
    private router: Router,
  ) { }

  canActivate(router, state: RouterStateSnapshot): Observable<boolean> {
    return this.authServise.user$.pipe(map(user => {
      if (user) { return true; }

      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }));
  }
}

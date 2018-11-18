import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable, of} from 'rxjs';
import {User} from './models/user';
import {switchMap} from 'rxjs/operators';
import {UserService} from './user.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private frAuth: AngularFireAuth,
    private userService: UserService,
    private router: Router,
    ) {
    this.user$ = this.frAuth.authState;
  }

  login() {
    this.frAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.frAuth.auth.signOut();
    this.router.navigateByUrl('/');
  }

  get User$(): Observable<User> {
    return this.user$
      .pipe(switchMap(user => {
        if (user) { return this.userService.get(user.uid); }

        return of(null);
      }));
  }
}

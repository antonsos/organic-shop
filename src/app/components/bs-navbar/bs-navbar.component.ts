import {Component} from '@angular/core';
import {AuthService} from '../../auth.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: User;
  constructor(public authService: AuthService) {
    authService.User$.subscribe(user => this.appUser = user);
  }

  logout() {
    this.authService.logout();
  }

}

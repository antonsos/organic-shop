import { Component } from '@angular/core';
import {AuthService} from '../../auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
  ) { }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    
    localStorage.setItem('returnUrl', returnUrl);
    this.authService.login();
  }
}

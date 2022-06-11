import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth.service';
import { LoginData } from 'src/app/core/interfaces/login-data.interface';
import { Router } from '@angular/router';
import { UserCredential } from '@angular/fire/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  private authenticate(login: Promise<UserCredential>)
  {
    return login.then(async (res) => {
      if (await this.authService.isAllowed(res)) {
        this.router.navigate(['/dashboard']);
      } else {
        this.authService.logout();
        alert("You are not registered. Contact a system admin.");
      }
    })
    .catch((e) => alert(e.message));
  }

  login(loginData: LoginData) {
    this.authenticate(this.authService.login(loginData));
  }

  loginWithGoogle() {
    this.authenticate(this.authService.loginWithGoogle());
  }
}

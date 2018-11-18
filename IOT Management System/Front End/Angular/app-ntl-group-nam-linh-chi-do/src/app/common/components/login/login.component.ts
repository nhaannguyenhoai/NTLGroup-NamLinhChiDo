import { AppLoadingService } from 'src/app/share/services/app-loading.service';
import { AppNavigationService } from 'src/app/share/services/app-navigation.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginStatus = null;

  constructor(
    private _AppLoadingService: AppLoadingService,
    private _AppNavigationService: AppNavigationService,
    private _AuthenticationService: AuthenticationService,
    private _Router: Router
  ) {}

  ngOnInit() {
    this.initializeLogin();
    // this._AuthenticationService.signOut();
  }

  initializeLogin() {
    this._AppLoadingService.showLoading();
    this._AuthenticationService
      .getCurrentUser()
      .pipe()
      .subscribe(__auth => {
        if (__auth) {
          this.loginStatus = true;
          this._Router.navigate(['portal/sensors']);
          this._AppLoadingService.hideLoading();
        } else {
          this.loginStatus = false;
          this.initializeForm();
          this._AppNavigationService.updateNavigation('Login');
          this._AppLoadingService.hideLoading();
        }
      });
  }

  initializeForm() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  signIn() {
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;

    this._AuthenticationService.signIn(email, password);
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      this.signIn();
    }
  }
}

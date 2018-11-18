import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AppLoadingService } from 'src/app/share/services/app-loading.service';
import { AppToastrService } from 'src/app/share/services/app-toastr.service';
import { Injectable } from '@angular/core';
import { MESSAGES } from '../../share/constants/message.constant';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private _AngularFireAuth: AngularFireAuth,
    private _AppLoadingService: AppLoadingService,
    private _AppToastrService: AppToastrService,
    private _Router: Router,
  ) {}

  async signIn(email: string, passwd: string) {
    this._AppLoadingService.showLoading();
    try {
      const success = await this._AngularFireAuth.auth.signInWithEmailAndPassword(
        email,
        passwd
      );
      this._Router.navigate(['portal/sensors']);
      this._AppLoadingService.hideLoading();
      this._AppToastrService.showSuccess(
        MESSAGES.success.signIn.title,
        MESSAGES.success.signIn.content
      );
      return success;
    } catch (error) {
      this._AppLoadingService.hideLoading();
      this._AppToastrService.showError(
        MESSAGES.error.signIn.title,
        MESSAGES.error.signIn.content
      );
    }
  }

  async signOut() {
    this._AppLoadingService.showLoading();
    try {
      const success = await this._AngularFireAuth.auth.signOut();
      this._Router.navigate(['login']);
      this._AppLoadingService.hideLoading();
      this._AppToastrService.showSuccess(
        MESSAGES.success.signOut.title,
        MESSAGES.success.signOut.content
      );
      return success;
    } catch (error) {
      console.log(error);
      this._AppLoadingService.hideLoading();
    }
  }

  getCurrentUser(): Observable<firebase.User> {
    return this._AngularFireAuth.authState;
  }
}

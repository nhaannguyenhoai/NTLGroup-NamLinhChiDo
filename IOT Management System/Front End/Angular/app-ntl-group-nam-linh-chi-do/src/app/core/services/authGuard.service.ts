import { AngularFireAuth } from '@angular/fire/auth';
import { AppLoadingService } from 'src/app/share/services/app-loading.service';
import { AppToastrService } from 'src/app/share/services/app-toastr.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { MESSAGES } from '../../share/constants/message.constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private _AppLoadingService: AppLoadingService,
    private _AppToastrService: AppToastrService,
    private _Router: Router,
    private _AngularFireAuth: AngularFireAuth
  ) {}

  canActivate(): Observable<boolean> {
    this._AppLoadingService.showLoading();
    return this._AngularFireAuth.authState.pipe(
      map(auth => {
        if (!auth) {
          this._AppToastrService.showError(MESSAGES.error.navigate.title, MESSAGES.error.navigate.content);
          this._Router.navigateByUrl('login');
          this._AppLoadingService.hideLoading();
          return false;
        }
        this._AppLoadingService.hideLoading();
        return true;
      }),
      take(1)
    );
  }
}

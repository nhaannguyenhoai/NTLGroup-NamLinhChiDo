import * as firebase from 'firebase/app';
import { AppLoadingService } from 'src/app/share/services/app-loading.service';
import { AppNavigationService } from 'src/app/share/services/app-navigation.service';
import { AuthenticationService } from '../../../core/services/authentication.service';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent implements OnInit {
  currentUser: firebase.User = null;

  constructor(
    private _AuthenticationService: AuthenticationService,
    private _ChangeDetectorRef: ChangeDetectorRef,
    private _AppLoadingService: AppLoadingService,
    private _AppNavigationService: AppNavigationService
  ) {}

  ngOnInit() {
    this._AppNavigationService.updateNavigation('User Details');
    this.initializeCurrentUser();
  }

  initializeCurrentUser() {
    this._AppLoadingService.showLoading();
    this._AuthenticationService
      .getCurrentUser()
      .pipe()
      .subscribe(__auth => {
        if (__auth) {
          this.currentUser = __auth;
        } else {
          this.currentUser = null;
        }
        this._ChangeDetectorRef.markForCheck();
        this._AppLoadingService.hideLoading();
      });
  }
}

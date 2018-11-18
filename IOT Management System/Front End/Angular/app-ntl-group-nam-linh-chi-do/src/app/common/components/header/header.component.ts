import * as firebase from 'firebase/app';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: firebase.User = null;

  constructor(
    private _AuthenticationService: AuthenticationService,
    private _Router: Router
  ) {}

  ngOnInit() {
    this.initializeCurrentUser();
  }

  initializeCurrentUser() {
    this._AuthenticationService
      .getCurrentUser()
      .pipe()
      .subscribe(__auth => {
        if (__auth) {
          this.currentUser = __auth;
        } else {
          this.currentUser = null;
        }
      });
  }

  signOut() {
    this._AuthenticationService.signOut();
  }

  navigateToUserDetailsComponent() {
    this._Router.navigate(['portal/user-details']);
  }
}

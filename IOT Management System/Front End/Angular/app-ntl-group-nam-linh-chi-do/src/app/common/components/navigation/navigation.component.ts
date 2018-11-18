import { AppLoadingService } from 'src/app/share/services/app-loading.service';
import { AppNavigationService } from '../../../share/services/app-navigation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigationText = null;
  loadingStatus = null;

  constructor(
    private _AppLoadingService: AppLoadingService,
    private _AppNavigationService: AppNavigationService,
    private _Router: Router
  ) {}

  ngOnInit() {
    this.initializeToolbarTitle();
    this._AppLoadingService.loadingSubject$.pipe().subscribe(__loadingStatus => {
      this.loadingStatus = __loadingStatus;
    });
  }

  initializeToolbarTitle() {
    this._AppNavigationService.navigationSubject$
      .pipe()
      .subscribe(__navigationText => (this.navigationText = __navigationText));
  }

  navigateToSensorsComponent() {
    this._Router.navigate(['portal/sensors']);
  }

  navigateToDevicesComponent() {
    this._Router.navigate(['devices']);
  }

  navigateToTaskListComponent() {
    this._Router.navigate(['task-list']);
  }

  navigateToReportsComponent() {
    this._Router.navigate(['reports']);
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppNavigationService {
  navigationSubject$ = new Subject();

  constructor() {}

  updateNavigation(navigation: string) {
    this.navigationSubject$.next(navigation);
  }
}

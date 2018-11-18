import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppLoadingService {
  loadingSubject$ = new Subject();

  constructor() {}

  showLoading() {
    this.loadingSubject$.next(true);
  }

  hideLoading() {
    this.loadingSubject$.next(false);
  }
}

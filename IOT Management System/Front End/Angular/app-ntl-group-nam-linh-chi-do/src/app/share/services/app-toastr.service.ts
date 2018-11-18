import { Injectable } from '@angular/core';

declare var toastr: any;

@Injectable({
  providedIn: 'root'
})
export class AppToastrService {
  constructor() {
    this.initializeOptions();
  }

  initializeOptions() {
    toastr.options = {
      closeButton: true,
      debug: false,
      extendedTimeOut: '1000',
      hideDuration: '1000',
      hideEasing: 'linear',
      hideMethod: 'fadeOut',
      newestOnTop: false,
      onclick: null,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
      progressBar: false,
      showDuration: '500',
      showEasing: 'swing',
      showMethod: 'fadeIn',
      timeOut: '5000'
    };
  }

  showSuccess(title: string, message: string) {
    toastr.success(message, title);
  }

  showInfo(title: string, message: string) {
    toastr.info(message, title);
  }

  showWarning(title: string, message: string) {
    toastr.warning(message, title);
  }

  showError(title: string, message: string) {
    toastr.error(message, title);
  }

  clear() {
    toastr.clear();
  }

  remove() {
    toastr.remove();
  }
}

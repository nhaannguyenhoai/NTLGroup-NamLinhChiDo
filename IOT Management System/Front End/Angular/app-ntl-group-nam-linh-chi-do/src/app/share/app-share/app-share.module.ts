import { AppLoadingService } from '../services/app-loading.service';
import { AppNavigationService } from '../services/app-navigation.service';
import { AppToastrService } from '../services/app-toastr.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [AppLoadingService, AppNavigationService, AppToastrService]
})
export class AppShareModule {}

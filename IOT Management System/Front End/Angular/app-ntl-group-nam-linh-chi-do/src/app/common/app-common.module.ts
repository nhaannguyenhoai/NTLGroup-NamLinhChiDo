import { AppShareModule } from '../share/app-share/app-share.module';
import { AuthenticationService } from '../core/services/authentication.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressBarModule,
  MatToolbarModule
} from '@angular/material';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    AppShareModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatToolbarModule
  ],
  declarations: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    LoginComponent
  ],
  exports: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    LoginComponent
  ],
  providers: [AuthenticationService]
})
export class AppCommonModule {}

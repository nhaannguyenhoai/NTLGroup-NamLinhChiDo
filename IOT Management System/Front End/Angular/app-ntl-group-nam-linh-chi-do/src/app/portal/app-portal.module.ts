import { AppPortalRoutingModule } from './app-portal-routing.module';
import { AppShareModule } from '../share/app-share/app-share.module';
import { NgModule } from '@angular/core';
import { SensorsComponent } from './components/sensors/sensors.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatDividerModule
} from '@angular/material';

@NgModule({
  imports: [
    AppShareModule,
    AppPortalRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDividerModule
  ],
  declarations: [SensorsComponent, UserDetailsComponent]
})
export class AppPortalModule {}

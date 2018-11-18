import { AuthGuardService } from '../core/services/authGuard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorsComponent } from './components/sensors/sensors.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sensors',
    canActivate: [AuthGuardService]
  },
  {
    path: 'sensors',
    component: SensorsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'user-details',
    component: UserDetailsComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPortalRoutingModule {}

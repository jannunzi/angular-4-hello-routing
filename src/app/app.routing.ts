import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {WebsiteListComponent} from './website/website-list/website-list.component';
import {WidgetListComponent} from './widget/widget-list/widget-list.component';
import {AuthenticationService} from './services/authentication.service.client';
// import {FormExperimentComponent} from './experiments/form-experiment/form-experiment.component';

const appRoutes: Routes = [
  // { path: 'form', component: FormExperimentComponent },
  { path: 'widget', component: WidgetListComponent },
  { path: 'website', component: WebsiteListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthenticationService] },
  { path: '', pathMatch: 'full', redirectTo: 'login'}
];

export const routing = RouterModule.forRoot(appRoutes);

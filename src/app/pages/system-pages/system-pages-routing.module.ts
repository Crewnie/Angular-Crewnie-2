import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorPageComponent } from './error/error-page.component';
import { ForgotPasswordPageComponent } from './forgot-password/forgot-password-page.component';
import { LockScreenPageComponent } from './lock-screen/lock-screen-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { MaintenancePageComponent } from './maintenance/maintenance-page.component';
import { RegisterPageComponent } from './register/register-page.component';

import { IsNoLoginGuard } from '../../core/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    children: [
      // Access pages to Crewnie
      {
        path: '',
        canActivateChild: [IsNoLoginGuard],
        children: [
          {
            path: 'login',
            component: LoginPageComponent,
            data: {
              title: 'Login Page'
            }
          },
          {
            path: 'register',
            component: RegisterPageComponent,
            data: {
              title: 'Register Page'
            }
          },
          {
            path: 'forgotpassword',
            component: ForgotPasswordPageComponent,
            data: {
              title: 'Forgot Password Page'
            }
          }
        ]
      },
      // Crewnie exceptions
      {
        path: 'waiting-for',
        component: LockScreenPageComponent,
        data: {
          title: 'Lock Screen page'
        }
      },
      {
        path: 'register-wizard',
        loadChildren: './ngx-wizard/ngx-wizard.module#NGXFormWizardModule',
      },
      {
        path: 'maintenance',
        component: MaintenancePageComponent,
        data: {
          title: 'Maintenance Page'
        }
      },
      {
        path: '**',
        component: ErrorPageComponent,
        data: {
          title: '404 Error'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemPagesRoutingModule { }

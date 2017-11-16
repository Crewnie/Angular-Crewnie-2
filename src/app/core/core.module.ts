import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf
} from '@angular/core';

import { CommonModule } from '@angular/common';

// Toast Notification service
// import { ToastrService } from '../components/extra/toastr/toastr.service';

// Single-instance services throughout the application
import { AuthService } from './auth.service';
import { AccountHealthGuard } from './account-health-guard.service';
import { IsNoLoginGuard } from './auth-guard.service';


@NgModule({
imports:      [ CommonModule ],
declarations: [  ],
exports:      [  ],
providers:    [ AuthService, AccountHealthGuard, IsNoLoginGuard ]
})
export class CoreModule {}

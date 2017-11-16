import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeLandingPageLayoutComponent } from './layouts/home-landing-page/home-landing-page-layout.component';
import { FullLayoutComponent } from './layouts/full/full-layout.component';
import { SystemLayoutComponent } from './layouts/system/system-layout.component';

import { HOME_LANDING_PAGE_ROUTES } from './shared/routes/home-landing-page-layout.routes';
import { FULL_ROUTES } from './shared/routes/full-layout.routes';
import { SYSTEM_ROUTES } from './shared/routes/system-layout.routes';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/make-movies',
    pathMatch: 'full',
  },
  { path: '', component: HomeLandingPageLayoutComponent, data: { title: 'Welcome to Crewnie' }, children: HOME_LANDING_PAGE_ROUTES },
  { path: '', component: FullLayoutComponent, data: { title: 'Full navigation layout' }, children: FULL_ROUTES },
  { path: '', component: SystemLayoutComponent, data: { title: 'System navigation Layout' }, children: SYSTEM_ROUTES },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

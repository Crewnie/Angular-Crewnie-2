import { Routes, RouterModule } from '@angular/router';

// Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const SYSTEM_ROUTES: Routes = [
  {
    path: '',
    loadChildren: './pages/system-pages/system-pages.module#SystemPagesModule'
  },
];

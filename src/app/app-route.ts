import { Routes } from '@angular/router';

import { HomeLayoutComponent } from './page-home/components/home-layout/home-layout.component';

export class RoutesPaths {
  public static readonly homePage = '';
}

export const APP_ROUTES: Routes = [
  {
    path: RoutesPaths.homePage,
    pathMatch: 'full',
    loadComponent: () =>
      import('./page-home/components/home-layout/home-layout.component').then(
        (m) => m.HomeLayoutComponent
      ),
  },
];


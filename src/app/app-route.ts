import { Routes } from '@angular/router';

export class RoutesPaths {
  public static readonly homePage = '';
  public static readonly notFoundPage = 'not-found';
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
  {
    path: RoutesPaths.notFoundPage,
    pathMatch: 'full',
    loadComponent() {
      return import('./page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      );
    },
  },
  {
    path: '**',
    redirectTo: RoutesPaths.notFoundPage,
  },
];

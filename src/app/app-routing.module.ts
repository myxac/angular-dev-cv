import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';


export class RoutesPaths {
  public static readonly homePage = '';
}

const routes: Routes = [
  {
    path: RoutesPaths.homePage,
    pathMatch: 'full',
    loadChildren: () => import('./page-home/page-home.module').then(m => m.PageHomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {HomeLayoutComponent} from "./internals";

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageHomeRoutingModule { }

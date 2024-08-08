import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeLayoutComponent} from './internals';
import {PageHomeRoutingModule} from "./page-home-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    PageHomeRoutingModule,
    SharedModule,
  ]
})
export class PageHomeModule {
}

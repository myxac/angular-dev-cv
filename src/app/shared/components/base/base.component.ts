import { Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { ApiService, LanguageService } from '../../internals';

@Component({
  selector: 'app-parent-block',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
})
export class BaseComponent implements OnInit, OnDestroy {
  protected apiService = inject(ApiService);
  protected languageService = inject(LanguageService);
  protected onDestroy$: Subject<void> = new Subject<void>();

  public constructor() {
    effect(() => {
      this.languageService.defaultLanguage();
      this.getComponentData();
    });
  }

  public ngOnInit(): void {
    this.getComponentData();
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  protected getComponentData(): void {}
}

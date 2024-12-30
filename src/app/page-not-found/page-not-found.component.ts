import { Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';

import { NotFoundInterface } from './models/not-found.model';
import { ApiService } from './services/api.service';
import { LanguageService } from '../shared/internals';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink, UpperCasePipe],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  public model?: NotFoundInterface;

  private onDestroy$: Subject<void> = new Subject<void>();
  private readonly apiService = inject(ApiService);
  private readonly languageService = inject(LanguageService);

  public constructor() {
    effect(() => {
      this.languageService.defaultLanguage();
      this.getData();
    });
  }

  public ngOnInit() {
    this.getData();
  }

  public getData() {
    this.apiService
      .getNotFoundData()
      .pipe(
        takeUntil(this.onDestroy$),
        tap((result: NotFoundInterface) => (this.model = result))
      )
      .subscribe();
  }

  public ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from "rxjs";

import { ApiService, LanguageService, LanguagesInterface } from "../../internals";

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit, OnDestroy {
  public model: LanguagesInterface | undefined;

  private onDestroy$: Subject<void> = new Subject<void>();
  private readonly component: string = 'languages';

  constructor(
    private apiService: ApiService,
    private languageService: LanguageService,
    ) {
  }

  public ngOnInit(): void {
    this.getComponentData();

    this.languageService.defaultLanguage$.pipe(
      takeUntil(this.onDestroy$),
      tap(() => this.getComponentData()),
    ).subscribe();
  }

  public ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public createCircles(): number[] {
    return Array(5).fill(0).map((x, i) => i + 1);
  }

  private getComponentData(): void {
    this.apiService.getComponentData(this.component).pipe(
      takeUntil(this.onDestroy$),
      tap((result: LanguagesInterface) => this.model = result),
    ).subscribe();
  }
}

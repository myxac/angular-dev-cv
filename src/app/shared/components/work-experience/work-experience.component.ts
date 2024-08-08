import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from "rxjs";

import { ApiService, LanguageService, WorkExperienceInterface } from "../../internals";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit, OnDestroy {
  public model: WorkExperienceInterface | undefined;

  private onDestroy$: Subject<void> = new Subject<void>();
  private readonly component: string = 'experience';

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

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private getComponentData(): void {
    this.apiService.getComponentData(this.component).pipe(
      takeUntil(this.onDestroy$),
      tap((result: WorkExperienceInterface) => this.model = result),
    ).subscribe();
  }
}

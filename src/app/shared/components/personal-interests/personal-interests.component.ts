import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from "rxjs";

import { ApiModelType, ApiService, LanguageService, PersonalInterestsInterface } from "../../internals";

@Component({
  selector: 'app-personal-interests',
  templateUrl: './personal-interests.component.html',
  styleUrls: ['./personal-interests.component.scss']
})
export class PersonalInterestsComponent implements OnInit, OnDestroy {
  public model: PersonalInterestsInterface | undefined;

  private onDestroy$: Subject<void> = new Subject<void>();
  private readonly component: string = 'personalInterests';

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
      tap((result: ApiModelType) => this.model = result),
    ).subscribe();
  }
}

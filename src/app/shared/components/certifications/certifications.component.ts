import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subject, takeUntil, tap } from "rxjs";

import { ApiService, CertificationsInterface, LanguageService, } from "../../internals";

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
  standalone: true,
})
export class CertificationsComponent implements OnInit, OnDestroy {
  public model?: CertificationsInterface;

  private onDestroy$: Subject<void> = new Subject<void>();
  private readonly component: string = 'certifications';

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
      tap((result: CertificationsInterface) => this.model = result),
      tap(() => this.model?.certificationsList?.sort((a, b) => a.order > b.order? -1 : 1)),
    ).subscribe();
  }

}

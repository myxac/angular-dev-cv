import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from "rxjs";

import { ApiService, LanguageService, PersonalInfoInterface, StructuredDataService } from "../../internals";

@Component({
  selector: 'app-persona-l-info',
  templateUrl: './persona-l-info.component.html',
  styleUrls: ['./persona-l-info.component.scss']
})
export class PersonaLInfoComponent implements OnInit, OnDestroy {
  public model: PersonalInfoInterface | undefined;

  private readonly component: string = 'personalInfo';
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private apiService: ApiService,
    private languageService: LanguageService,
    private structuredDataService: StructuredDataService,
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

  public getItemClass(key: string): string {
    switch (key) {
      case 'name':
        return 'fas fa-user';
      case 'email':
        return 'fa-solid fa-envelope';
      case 'phone':
        return 'fas fa-phone';
      case 'address':
        return 'fas fa-home';
      case 'birthday':
        return 'fas fa-calendar';
      case 'bornPlace':
        return 'fas fa-map-marker-alt';
      case 'nationality':
        return 'fas fa-flag';
      case 'workPermit':
        return 'fas fa-passport';
      default:
        return 'fas fa-user'
    }
  }

  private getComponentData(): void {
    this.apiService.getComponentData(this.component).pipe(
      takeUntil(this.onDestroy$),
      tap((result: PersonalInfoInterface) => this.model = result),
      tap(r => this.addStructuredData()),
    ).subscribe();
  }

  private addStructuredData(): void {
    const personStructuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": this.model?.personalData?.name,
      "jobTitle": "Frontend Angular Developer",
      "email": this.model?.personalData?.email,
      "telephone": this.model?.personalData?.phone,
      "sameAs": [
        this.model?.githubLink,
      ],
    };

    this.structuredDataService.addStructuredData(personStructuredData);
  }
}

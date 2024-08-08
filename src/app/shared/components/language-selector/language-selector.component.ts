import { Component, OnInit } from '@angular/core';

import { LanguageService, ApiService } from "../../internals";

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  public languages: string[] = ['DE', 'ENG', 'UKR'];
  public currentLanguage: string = 'DE';
  public isDropdownOpen: boolean = false;

  constructor(
    private apiService: ApiService,
    private languageService: LanguageService,
  ) {
  }

  public ngOnInit(): void {
  }

  public toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  public selectLanguage(language: string): void {
    this.currentLanguage = language;
    this.isDropdownOpen = false;
    this.languageChanged(language);
  }

  public languageChanged(language: string): void {
    this.apiService.setDefaultLanguage(language);
    this.languageService.defaultLanguage$.next(language);
  }
}

import { Component, inject, signal } from '@angular/core';

import { LanguageService, ApiService } from '../../internals';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  standalone: true,
  imports: [SlicePipe],
})
export class LanguageSelectorComponent {
  public languages = signal<string[]>(['DE', 'ENG', 'UKR']);
  public currentLanguage = signal<string>('DE');
  public isDropdownOpen: boolean = false;

  private languageService = inject(LanguageService);
  private apiService = inject(ApiService);

  public toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  public selectLanguage(language: string): void {
    this.currentLanguage.set(language);
    this.isDropdownOpen = false;
    this.languageChanged(language);
  }

  public languageChanged(language: string): void {
    this.apiService.setDefaultLanguage(language);

    this.languageService.defaultLanguage.set(language);
  }
}

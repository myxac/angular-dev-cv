import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import {
  CertificationsComponent,
  EducationComponent,
  KeysPipe,
  LanguagesComponent,
  LanguageSelectorComponent,
  PersonaLInfoComponent,
  PersonalInterestsComponent,
  SkillsComponent, SocialMediaLinksComponent,
  WorkExperienceComponent,
} from '../shared/internals';

@NgModule({
  declarations: [
    PersonaLInfoComponent,
    KeysPipe,
    PersonalInterestsComponent,
    WorkExperienceComponent,
    LanguagesComponent,
    EducationComponent,
    SkillsComponent,
    LanguageSelectorComponent,
    CertificationsComponent,
    SocialMediaLinksComponent,
  ],
  exports: [
    PersonaLInfoComponent,
    PersonalInterestsComponent,
    LanguagesComponent,
    WorkExperienceComponent,
    EducationComponent,
    SkillsComponent,
    LanguageSelectorComponent,
    CertificationsComponent,
    SocialMediaLinksComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
  ]
})
export class SharedModule {
}

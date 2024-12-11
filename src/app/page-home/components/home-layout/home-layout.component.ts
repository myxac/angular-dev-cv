import { Component, OnInit } from '@angular/core';

import {
  PersonaLInfoComponent,
  LanguagesComponent,
  WorkExperienceComponent,
  PersonalInterestsComponent,
  EducationComponent,
  CertificationsComponent,
  SkillsComponent,
} from 'src/app/shared/internals';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  standalone: true,
  imports: [
    PersonaLInfoComponent,
    LanguagesComponent,
    WorkExperienceComponent,
    PersonalInterestsComponent,
    EducationComponent,
    CertificationsComponent,
    SkillsComponent,
  ],
})
export class HomeLayoutComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}
}

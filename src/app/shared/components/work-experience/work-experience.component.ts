import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil, tap } from 'rxjs';

import {
  BaseComponent,
  WorkExperienceInterface,
  TitleComponent,
} from '../../internals';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
  standalone: true,
  imports: [TitleComponent],
})
export class WorkExperienceComponent
  extends BaseComponent
  implements OnInit, OnDestroy
{
  public model: WorkExperienceInterface | undefined;

  private readonly component: string = 'experience';

  protected override getComponentData(): void {
    this.apiService
      .getComponentData(this.component)
      .pipe(
        takeUntil(this.onDestroy$),
        tap((result: WorkExperienceInterface) => (this.model = result))
      )
      .subscribe();
  }
}

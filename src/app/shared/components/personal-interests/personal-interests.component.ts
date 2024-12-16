import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil, tap } from 'rxjs';

import {
  ApiModelType,
  BaseComponent,
  PersonalInterestsInterface,
} from '../../internals';

@Component({
  selector: 'app-personal-interests',
  templateUrl: './personal-interests.component.html',
  styleUrls: ['./personal-interests.component.scss'],
  standalone: true,
})
export class PersonalInterestsComponent
  extends BaseComponent
  implements OnInit, OnDestroy
{
  public model: PersonalInterestsInterface | undefined;

  private readonly component: string = 'personalInterests';

  protected override getComponentData(): void {
    this.apiService
      .getComponentData(this.component)
      .pipe(
        takeUntil(this.onDestroy$),
        tap((result: ApiModelType) => (this.model = result))
      )
      .subscribe();
  }
}

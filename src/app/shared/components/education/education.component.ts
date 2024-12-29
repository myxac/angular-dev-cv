import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil, tap } from 'rxjs';

import { BaseComponent, EducationInterface, TitleComponent } from '../../internals';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  standalone: true,
  imports: [TitleComponent]
})
export class EducationComponent
  extends BaseComponent
  implements OnInit, OnDestroy
{
  public model: EducationInterface | undefined;

  private readonly component: string = 'education';

  protected override getComponentData(): void {
    this.apiService
      .getComponentData(this.component)
      .pipe(
        takeUntil(this.onDestroy$),
        tap((result: EducationInterface) => (this.model = result))
      )
      .subscribe();
  }
}

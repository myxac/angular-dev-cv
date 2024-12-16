import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil, tap } from 'rxjs';
import { KeyValuePipe } from '@angular/common';

import { BaseComponent, SkillsInterface } from '../../internals';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [KeyValuePipe],
})
export class SkillsComponent
  extends BaseComponent
  implements OnInit, OnDestroy
{
  public model: SkillsInterface | undefined;

  private readonly component: string = 'skills';

  protected override getComponentData(): void {
    this.apiService
      .getComponentData(this.component)
      .pipe(
        takeUntil(this.onDestroy$),
        tap((result: SkillsInterface) => (this.model = result))
      )
      .subscribe();
  }
}

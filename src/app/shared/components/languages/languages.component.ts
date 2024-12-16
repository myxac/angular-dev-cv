import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil, tap } from 'rxjs';

import { BaseComponent, LanguagesInterface } from '../../internals';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
  standalone: true,
  imports: [],
})
export class LanguagesComponent
  extends BaseComponent
  implements OnInit, OnDestroy
{
  public model!: LanguagesInterface;

  private readonly component: string = 'languages';

  public createCircles(): number[] {
    return Array(5)
      .fill(0)
      .map((x, i) => i + 1);
  }

  protected override getComponentData(): void {
    this.apiService
      .getComponentData(this.component)
      .pipe(
        takeUntil(this.onDestroy$),
        tap((result: LanguagesInterface) => (this.model = result))
      )
      .subscribe();
  }
}

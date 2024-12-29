import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil, tap } from 'rxjs';

import { BaseComponent, CertificationsInterface } from '../../internals';
import { SortPipe } from '../../pipes/sort.pipe';
import { TitleComponent } from "../title/title.component";

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
  standalone: true,
  imports: [SortPipe, TitleComponent, TitleComponent],
})
export class CertificationsComponent
  extends BaseComponent
  implements OnInit, OnDestroy
{
  public model?: CertificationsInterface;

  private readonly component: string = 'certifications';

  protected override getComponentData(): void {
    this.apiService
      .getComponentData(this.component)
      .pipe(
        takeUntil(this.onDestroy$),
        tap((result: CertificationsInterface) => (this.model = result))
      )
      .subscribe();
  }
}

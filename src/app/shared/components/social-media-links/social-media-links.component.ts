import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from "rxjs";

import { ApiService } from "../../internals";

@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.component.html',
  styleUrls: ['./social-media-links.component.scss']
})

export class SocialMediaLinksComponent implements OnInit, OnDestroy {
  public model?: { github?: string, linkedin?: string, xing?: string };

  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private apiService: ApiService) {
  }

  public ngOnInit(): void {
    this.apiService.getSocialMediaLinks().pipe(
      takeUntil(this.onDestroy$),
      tap((result: any) => this.model = result.links),
    ).subscribe()
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public getItemClass(key: string): string {
    switch (key) {
      case 'github':
        return 'fa-brands fa-github';
      case 'linkedin':
        return 'fa-brands fa-linkedin-in';
      case 'xing':
        return 'fa-brands fa-xing';
      default:
        return 'fas fa-user'
    }
  }
}

import {
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import { KeyValuePipe } from '@angular/common';

import { ApiService, SocialMediaLinksInterface } from '../../internals';

@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.component.html',
  styleUrls: ['./social-media-links.component.scss'],
  standalone: true,
  imports: [KeyValuePipe],
})
export class SocialMediaLinksComponent {
  public model = signal<SocialMediaLinksInterface | undefined>(undefined);

  private readonly apiService = inject(ApiService);

  constructor() {
    effect(() => {
      this.model = signal(this.apiService.getSocialMediaLinks()());
    });
  }

  public getItemClass(key: any): string {
    switch (key) {
      case 'github':
        return 'fa-brands fa-github';
      case 'linkedin':
        return 'fa-brands fa-linkedin-in';
      case 'xing':
        return 'fa-brands fa-xing';
      default:
        return 'fas fa-user';
    }
  }
}

import { inject, Injectable, signal, Signal } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import {
  ApiModelType,
  buildApiModel,
  builSocialMediaLinksModel,
  LanguageService,
  SocialMediaLinksInterface,
} from '../internals';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public socialMediaLinks: Signal<SocialMediaLinksInterface | undefined>;

  private readonly languageService = inject(LanguageService);

  constructor(private firestore: AngularFirestore) {
    this.socialMediaLinks = toSignal(
      this.firestore
        .collection('resume')
        .doc('socialMedia')
        .valueChanges()
        .pipe(map((data: any) => builSocialMediaLinksModel(data.links))),
      { initialValue: undefined }
    );
  }

  public getComponentData(component: string): Observable<ApiModelType> {
    return this.firestore
      .collection('resume')
      .doc(component)
      .valueChanges()
      .pipe(
        map((data: any) =>
          buildApiModel(component, data[this.languageService.defaultLanguage()])
        )
      );
  }

  public getSocialMediaLinks(): Signal<SocialMediaLinksInterface | undefined> {
    return this.socialMediaLinks;
  }
}

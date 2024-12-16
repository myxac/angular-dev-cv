import { Injectable, signal, Signal } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import {
  ApiModelType,
  buildApiModel,
  builSocialMediaLinksModel,
  SocialMediaLinksInterface,
} from '../internals';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public socialMediaLinks: Signal<SocialMediaLinksInterface | undefined>;
  public componentData: Signal<ApiModelType | undefined> = signal(undefined);

  private defaultLanguage = signal('DE');

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

  public setDefaultLanguage(language: string): void {
    this.defaultLanguage.set(language);
  }
  public getComponentData(component: string): Observable<ApiModelType> {
    return this.firestore
      .collection('resume')
      .doc(component)
      .valueChanges()
      .pipe(
        map((data: any) =>
          buildApiModel(component, data[this.defaultLanguage()])
        )
      );
  }

  public getSocialMediaLinks(): Signal<SocialMediaLinksInterface | undefined> {
    return this.socialMediaLinks;
  }
}

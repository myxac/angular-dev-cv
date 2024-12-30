import { inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

import { buildNotFoundModel } from '../models/not-found.model';
import { LanguageService } from 'src/app/shared/internals';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly firestore = inject(AngularFirestore);
  private readonly document = 'notFound';
  private readonly languageService = inject(LanguageService);

  public getNotFoundData() {
    return this.firestore
      .collection('resume')
      .doc(this.document)
      .valueChanges()
      .pipe(
        map((data: any) =>
          buildNotFoundModel(data[this.languageService.defaultLanguage()])
        )
      );
  }
}

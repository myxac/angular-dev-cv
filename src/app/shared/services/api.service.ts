import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { map, Observable } from "rxjs";

import { ApiModelType, buildApiModel } from "../internals";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private defaultLanguage = 'DE';

  constructor(private firestore: AngularFirestore) {
  }

  public setDefaultLanguage(lang: string): void{
    this.defaultLanguage = lang;
  }
  public getComponentData(component: string): Observable<ApiModelType> {
    return this.firestore.collection('resume').doc(component).valueChanges().pipe(
      map((data: any) => buildApiModel(component, data[this.defaultLanguage])),
    );
  }

  public getSocialMediaLinks(): Observable<any> {
    return this.firestore.collection('resume').doc('socialMedia').valueChanges();
  }
}

import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public defaultLanguage$ = new Subject<string>();
}

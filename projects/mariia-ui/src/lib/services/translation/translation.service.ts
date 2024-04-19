import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { DEFAULT_TRANSLATIONS } from './translation';
import { DEFAULT_LANG } from '../../config/translation-injectors';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  lang = DEFAULT_LANG;
  translations: Record<string, string> = {};
  constructor(private http: HttpClient) {}

  getTranslations(lang: string, url: string | null): Observable<any> {
    this.lang = lang;

    const request$ = url ? this.http.get(url) : of(DEFAULT_TRANSLATIONS);
    return request$.pipe(
      tap(res => {
        this.translations = this.flattenJson(res);
      })
    );
  }

  translate(key: string, value?: any): string {
    return this.replaceParams(this.translations[key] || '', value);
  }

  replaceParams(translation: string, value: any): string {
    if (value) {
      return translation.replace(/\${\s*([^{}\s]+)\s*}/g, value);
    } else return translation;
  }

  flattenJson(json: any, prefix = ''): Record<string, string> {
    let result: Record<string, string> = {};

    for (const key in json) {
      if (Object.prototype.hasOwnProperty.call(json, key)) {
        const prefixedKey = prefix ? `${prefix}.${key}` : key;
        if (typeof json[key] === 'object' && json[key] !== null) {
          const nested = this.flattenJson(json[key], prefixedKey);
          result = { ...result, ...nested };
        } else {
          result[prefixedKey] = json[key];
        }
      }
    }

    return result;
  }
}

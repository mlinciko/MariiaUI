import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

export enum LangEnum {
  RU = 'RU',
  EN = 'EN',
}
export const DEFAULT_LANG = LangEnum.RU;
export const STORAGE_LANG_KEY = 'lang';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  translations: Record<string, string> = {};
  constructor(private http: HttpClient) {}

  setTranslationConfig(lang: LangEnum): Observable<any> {
    return this.http.get(`/assets/i18n/docs/${lang}.json`).pipe(
      tap(res => {
        this.translations = this.flattenJson(res);
      })
    );
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

  translate(key: string): string {
    return this.translations[key] || '';
  }

  setLang(lang: LangEnum): void {
    localStorage.setItem(STORAGE_LANG_KEY, lang);
    location.reload();
  }

  get lang(): LangEnum {
    return localStorage.getItem(STORAGE_LANG_KEY) as LangEnum;
  }
}

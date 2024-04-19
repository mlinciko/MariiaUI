import { InjectionToken } from '@angular/core';

// Создаем InjectionToken для языка библиотеки
export const MUI_LANGUAGE = new InjectionToken<string>('Library Language');
export const DEFAULT_LANG = 'en';

// Создаем InjectionToken для ссылки на файл переводов
export const MUI_TRANSLATION_FILE_URL = new InjectionToken<string>(
  'Translation File URL'
);

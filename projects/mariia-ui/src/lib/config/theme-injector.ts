import { InjectionToken } from '@angular/core';

export const MUI_THEME = new InjectionToken<string>('Library Theme');
export type ThemeType = 'dark' | 'light';
export type ThemeColor = 'blue' | 'violet' | 'green';
export type ThemeConfig = {
  type: ThemeType;
  color: ThemeColor;
};
export const DEFAULT_THEME: ThemeConfig = {
  type: 'light',
  color: 'blue',
};

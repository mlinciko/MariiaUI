import { Injectable } from '@angular/core';
import { ThemeConfig } from '../../config/theme-injector';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeConfig!: ThemeConfig;

  initiTheme(config: ThemeConfig): void {
    this.themeConfig = config;
    document.documentElement.className = `${this.themeConfig.type}-${this.themeConfig.color}`;
  }
}

import { Injectable } from '@angular/core';
import { ThemeConfig } from '../../config/theme-injector';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeConfig!: ThemeConfig;

  setTheme(config: ThemeConfig): void {
    this.themeConfig = config;
    const element = document.documentElement;
    element.classList.forEach(classItem => element.classList.remove(classItem));

    document.documentElement.className = `${this.themeConfig.type}-${this.themeConfig.color}`;
  }
}

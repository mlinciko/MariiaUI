import { InitializeService } from '../services/initialize/initialize.service';
import { ThemeService } from '../services/theme/theme.service';
import { TranslationService } from '../services/translation/translation.service';
import { ThemeConfig } from './theme-injector';

export function initializeLib(
  initializeService: InitializeService,
  translationService: TranslationService,
  themeService: ThemeService,
  language: string,
  translationFileUrl: string,
  themeConfig: ThemeConfig
) {
  return () => {
    initializeService.renderInitialComponents();
    themeService.setTheme(themeConfig);
    return translationService.getTranslations(language, translationFileUrl);
  };
}

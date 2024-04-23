import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TDropdownOption } from 'projects/mariia-ui/src/lib/components/dropdown/option';
import { FormControl } from '@angular/forms';
import {
  LangEnum,
  TranslationService,
} from 'src/app/services/translation.service';
import { ThemeService } from 'projects/mariia-ui/src/public-api';
import {
  ThemeColor,
  ThemeType,
} from 'projects/mariia-ui/src/lib/config/theme-injector';

export enum ThemesEnum {
  LightBlue = 'light-blue',
  LightViolet = 'light-violet',
  LightGreen = 'light-green',
  DarkBlue = 'dark-blue',
  DarkViolet = 'dark-violet',
  DarkGreen = 'dark-green',
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  menuItems = [
    {
      route: 'demos',
      title: this.translationService.translate('header.menu.demos'),
    },
    {
      route: 'docs',
      title: this.translationService.translate('header.menu.docs'),
    },
    {
      route: null,
      title: this.translationService.translate('header.menu.blog'),
      link: 'https://github.com/mlinciko/UILib/issues',
      image: '/assets/github-logo.png',
    },
  ];

  constructor(
    private translationService: TranslationService,
    private themeService: ThemeService
  ) {}

  languages: TDropdownOption[] = [
    { key: 1, value: LangEnum.RU },
    { key: 2, value: LangEnum.EN },
  ];
  languageLabel = this.translationService.translate('header.dropdownLabel');
  dropdownControl: FormControl = new FormControl<TDropdownOption | null>(null);

  ngOnInit(): void {
    this.setLanguage();
    this.setTheme();
  }

  setLanguage(): void {
    const langOption = this.languages.find(
      option => option.value === this.translationService.lang
    );
    if (langOption) {
      this.dropdownControl.setValue(langOption);
    }
  }

  setTheme(): void {
    const themeOption = JSON.parse(localStorage.getItem('theme') || '');
    const theme = this.themes.find(option => option.key === themeOption?.key);
    if (theme) this.themesControl.setValue(theme);
    else this.themesControl.setValue(this.themes[0]);
  }

  onLanguageChange(option: TDropdownOption): void {
    this.translationService.setLang(option.value as LangEnum);
  }

  themes: TDropdownOption[] = [
    { key: 1, value: ThemesEnum.LightBlue },
    { key: 2, value: ThemesEnum.LightViolet },
    { key: 3, value: ThemesEnum.LightGreen },
    { key: 4, value: ThemesEnum.DarkBlue },
    { key: 5, value: ThemesEnum.DarkViolet },
    { key: 6, value: ThemesEnum.DarkGreen },
  ];
  themesLabel = this.translationService.translate('header.themesLabel');
  themesControl: FormControl = new FormControl<TDropdownOption | null>(null);

  onThemeChange(option: TDropdownOption): void {
    localStorage.setItem('theme', JSON.stringify(option));
    const [type, color] = option.value.split('-');
    this.themeService.setTheme({
      type: type as ThemeType,
      color: color as ThemeColor,
    });
  }
}

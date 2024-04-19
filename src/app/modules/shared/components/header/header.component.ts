import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TDropdownOption } from 'projects/mariia-ui/src/lib/components/dropdown/option';
import { FormControl } from '@angular/forms';
import {
  LangEnum,
  TranslationService,
} from 'src/app/services/translation.service';

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

  constructor(private translationService: TranslationService) {}

  languages: TDropdownOption[] = [
    { key: 1, value: LangEnum.RU },
    { key: 2, value: LangEnum.EN },
  ];
  label = this.translationService.translate('header.dropdownLabel');
  dropdownControl: FormControl = new FormControl<TDropdownOption | null>(null);

  ngOnInit(): void {
    const langOption = this.languages.find(
      option => option.value === this.translationService.lang
    );
    if (langOption) {
      this.dropdownControl.setValue(langOption);
    }
  }

  onSelectionChange(option: TDropdownOption): void {
    this.translationService.setLang(option.value as LangEnum);
  }
}

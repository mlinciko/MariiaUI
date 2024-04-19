import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { DROPDOWN_TITLE, DROPDOWN_CODE } from './dropdown';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-dropdown-doc',
  templateUrl: './dropdown-doc.component.html',
  styleUrls: ['./dropdown-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownDocComponent {
  constructor(private translationService: TranslationService) {}
  title = DROPDOWN_TITLE;
  description = this.translationService.translate('docs.dropdown.description');
  code = DROPDOWN_CODE;

  inputs: TInput[] = [
    {
      name: 'options',
      type: '<a href="/docs/data-types">TDropdownOption</a>[]',
      defaultValue: '[]',
      descr: this.translationService.translate('docs.dropdown.options'),
    },
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.dropdown.label'),
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.dropdown.disabled'),
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.dropdown.placeholder'),
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.dropdown.readOnly'),
    },
    {
      name: 'showClearButton',
      type: 'boolean',
      defaultValue: 'true',
      descr: this.translationService.translate('docs.dropdown.showClearButton'),
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr: this.translationService.translate('docs.dropdown.visible'),
    },
    {
      name: 'formControl',
      type: '<a href="https://angular.io/api/forms/FormControl">FormControl&lt;<a href="/docs/data-types">TDropdownOption</a> | null&gt;</a>',
      defaultValue: 'FormControl<TDropdownOption | null>(null)',
      descr: this.translationService.translate('docs.dropdown.formControl'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onSelectionChange',
      returnType: '<a href="/docs/data-types">TDropdownOption</a>',
      descr: this.translationService.translate(
        'docs.dropdown.onSelectionChange'
      ),
    },
    {
      name: 'onOptionsVisibilityChange',
      returnType: 'boolean',
      descr: this.translationService.translate(
        'docs.dropdown.onOptionsVisibilityChange'
      ),
    },
  ];
}

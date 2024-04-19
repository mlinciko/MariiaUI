import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { LOOKUP_TITLE, LOOKUP_CODE } from './lookup';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-lookup-doc',
  templateUrl: './lookup-doc.component.html',
  styleUrls: ['./lookup-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LookupDocComponent {
  constructor(private translationService: TranslationService) {}
  title = LOOKUP_TITLE;
  description = this.translationService.translate('docs.lookup.description');
  code = LOOKUP_CODE;

  inputs: TInput[] = [
    {
      name: 'options',
      type: '<a href="/docs/data-types">TDropdownOption</a>[]',
      defaultValue: '[]',
      descr: this.translationService.translate('docs.lookup.options'),
    },
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.lookup.label'),
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.lookup.disabled'),
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.lookup.placeholder'),
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.lookup.readOnly'),
    },
    {
      name: 'showClearButton',
      type: 'boolean',
      defaultValue: 'true',
      descr: this.translationService.translate('docs.lookup.showClearButton'),
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr: this.translationService.translate('docs.lookup.visible'),
    },
    {
      name: 'formControl',
      type: '<a href="https://angular.io/api/forms/FormControl">FormControl&lt;<a href="/docs/data-types">TDropdownOption</a> | null&gt;</a>',
      defaultValue: 'FormControl<TDropdownOption | null>(null)',
      descr: this.translationService.translate('docs.lookup.formControl'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onSelectionChange',
      returnType: '<a href="/docs/data-types">TDropdownOption</a>',
      descr: this.translationService.translate('docs.lookup.onSelectionChange'),
    },
    {
      name: 'onSearchChange',
      returnType: 'string',
      descr: this.translationService.translate('docs.lookup.onSearchChange'),
    },
    {
      name: 'onOptionsVisibilityChange',
      returnType: 'boolean',
      descr: this.translationService.translate(
        'docs.lookup.onOptionsVisibilityChange'
      ),
    },
  ];
}

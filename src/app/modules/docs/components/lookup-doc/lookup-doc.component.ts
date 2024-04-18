import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { LOOKUP_TITLE, LOOKUP_DESCRIPTION, LOOKUP_CODE } from './lookup';

@Component({
  selector: 'app-lookup-doc',
  templateUrl: './lookup-doc.component.html',
  styleUrls: ['./lookup-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LookupDocComponent {
  title = LOOKUP_TITLE;
  description = LOOKUP_DESCRIPTION;
  code = LOOKUP_CODE;

  inputs: TInput[] = [
    {
      name: 'options',
      type: '<a href="/docs/data-types">TDropdownOption</a>[]',
      defaultValue: '[]',
      descr: 'Property allows to set options for the lookup component',
    },
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set a label for the lookup component',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to set disabled state for the lookup component',
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set placeholder for the lookup component',
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to set readOnly state for the lookup component',
    },
    {
      name: 'showClearButton',
      type: 'boolean',
      defaultValue: 'true',
      descr:
        'Property allows to set show clear button state for the lookup component',
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr: 'Property allows to set visiblity state for the lookup component',
    },
    {
      name: 'formControl',
      type: '<a href="https://angular.io/api/forms/FormControl">FormControl&lt;<a href="/docs/data-types">TDropdownOption</a> | null&gt;</a>',
      defaultValue: 'FormControl<TDropdownOption | null>(null)',
      descr:
        'Property allows to set native angular form control to lookup component',
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onSelectionChange',
      returnType: '<a href="/docs/data-types">TDropdownOption</a>',
      descr: 'Property emits an event when the lookup component gets new value',
    },
    {
      name: 'onSearchChange',
      returnType: 'string',
      descr:
        'Property emits an event when the lookup component gets new value in search field',
    },
    {
      name: 'onOptionsVisibilityChange',
      returnType: 'boolean',
      descr:
        'Property emits an event when the lookup component options visibility state changes',
    },
  ];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import {
  DROPDOWN_TITLE,
  DROPDOWN_DESCRIPTION,
  DROPDOWN_CODE,
} from './dropdown';

@Component({
  selector: 'app-dropdown-doc',
  templateUrl: './dropdown-doc.component.html',
  styleUrls: ['./dropdown-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownDocComponent {
  title = DROPDOWN_TITLE;
  description = DROPDOWN_DESCRIPTION;
  code = DROPDOWN_CODE;

  inputs: TInput[] = [
    {
      name: 'options',
      type: '<a href="/docs/data-types">TDropdownOption</a>[]',
      defaultValue: '[]',
      descr: 'Property allows to set options for the dropdown component',
    },
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set a title for the dropdown component',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to set disabled state for the dropdown component',
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set placeholder for the dropdown component',
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to set readOnly state for the dropdown component',
    },
    {
      name: 'showClearButton',
      type: 'boolean',
      defaultValue: 'true',
      descr:
        'Property allows to set show clear button state for the dropdown component',
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr:
        'Property allows to set visiblity state for the dropdown component',
    },
    {
      name: 'formControl',
      type: '<a href="https://angular.io/api/forms/FormControl">FormControl&lt;<a href="/docs/data-types">TDropdownOption</a> | null&gt;</a>',
      defaultValue: 'FormControl<TDropdownOption | null>(null)',
      descr:
        'Property allows to set native angular form control to dropdown component',
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onSelectionChange',
      returnType: '<a href="/docs/data-types">TDropdownOption</a>',
      descr:
        'Property emits an event when the dropdown component gets new value',
    },
    {
      name: 'onOptionsVisibilityChange',
      returnType: 'boolean',
      descr:
        'Property emits an event when the dropdown component options visibility state changes',
    },
  ];
}

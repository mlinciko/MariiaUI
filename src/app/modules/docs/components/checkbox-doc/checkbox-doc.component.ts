import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import {
  CHECKBOX_TITLE,
  CHECKBOX_DESCRIPTION,
  CHECKBOX_CODE,
} from './checkbox';

@Component({
  selector: 'app-checkbox-doc',
  templateUrl: './checkbox-doc.component.html',
  styleUrls: ['./checkbox-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxDocComponent {
  title = CHECKBOX_TITLE;
  description = CHECKBOX_DESCRIPTION;
  code = CHECKBOX_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set a title for the checkbox component',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to set disabled state for the checkbox component',
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to set readOnly state for the checkbox component',
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr:
        'Property allows to set visiblity state for the checkbox component',
    },
    {
      name: 'formControl',
      type: '<a href="https://angular.io/api/forms/FormControl">FormControl&lt;boolean | null&gt;</a>',
      defaultValue: 'FormControl<boolean | null>(null)',
      descr:
        'Property allows to set native angular form control to checkbox component',
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onChange',
      returnType: 'boolean | null',
      descr: 'Emits an event when the checkbox component gets new value',
    },
  ];
}

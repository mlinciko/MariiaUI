import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import {
  RADIO_GROUP_TITLE,
  RADIO_GROUP_DESCRIPTION,
  RADIO_GROUP_CODE,
} from './radio-group';

@Component({
  selector: 'app-radio-group-doc',
  templateUrl: './radio-group-doc.component.html',
  styleUrls: ['./radio-group-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupDocComponent {
  title = RADIO_GROUP_TITLE;
  description = RADIO_GROUP_DESCRIPTION;
  code = RADIO_GROUP_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set a label for the radio-group component',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr:
        'Property allows to set disabled state for the radio-group component',
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr:
        'Property allows to set readOnly state for the radio-group component',
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr:
        'Property allows to set visiblity state for the radio-group component',
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onChange',
      returnType: `string | null`,
      descr:
        'Property emits a new value when radio-group selected element changed',
    },
  ];
}

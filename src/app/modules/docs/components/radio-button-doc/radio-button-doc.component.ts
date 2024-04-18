import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import {
  RADIO_BUTTON_TITLE,
  RADIO_BUTTON_DESCRIPTION,
  RADIO_BUTTON_CODE,
} from './radio-button';

@Component({
  selector: 'app-radio-button-doc',
  templateUrl: './radio-button-doc.component.html',
  styleUrls: ['./radio-button-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonDocComponent {
  title = RADIO_BUTTON_TITLE;
  description = RADIO_BUTTON_DESCRIPTION;
  code = RADIO_BUTTON_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set a label for the radio-button component',
    },
    {
      name: 'isChecked',
      type: 'boolean',
      defaultValue: 'false',
      descr:
        'Property allows to set checked state for the radio-button component',
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onChange',
      returnType: `void`,
      descr:
        'Property emits a new event when radio-button checked status changes',
    },
  ];
}

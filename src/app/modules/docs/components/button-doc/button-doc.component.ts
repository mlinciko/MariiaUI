import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { BUTTON_TITLE, BUTTON_DESCRIPTION, BUTON_CODE } from './button';

@Component({
  selector: 'app-button-doc',
  templateUrl: './button-doc.component.html',
  styleUrls: ['./button-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDocComponent {
  title = BUTTON_TITLE;
  description = BUTTON_DESCRIPTION;
  code = BUTON_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set a title for the button',
    },
    {
      name: 'type',
      type: '<a href="/docs/data-types">ButtonTypeEnum</a>',
      defaultValue: 'ButtonTypeEnum.Default',
      descr: 'Property allows to set type for the button from enum',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to set disabled state for the button',
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onClick',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: 'Property emits an event when the button is clicked',
    },
  ];
}

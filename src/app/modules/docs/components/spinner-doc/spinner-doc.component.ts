import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { SPINNER_TITLE, SPINNER_DESCRIPTION, SPINNER_CODE } from './spinner';

@Component({
  selector: 'app-spinner-doc',
  templateUrl: './spinner-doc.component.html',
  styleUrls: ['./spinner-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerDocComponent {
  title = SPINNER_TITLE;
  description = SPINNER_DESCRIPTION;
  code = SPINNER_CODE;

  inputs: TInput[] = [
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'false',
      descr:
        'Property allows to set visibility state for the spinner component',
    },
    {
      name: 'color',
      type: 'string',
      defaultValue: '#cecece',
      descr: 'Property allows to set color for the spinner component',
    },
    {
      name: 'width',
      type: 'string',
      defaultValue: '18px',
      descr: 'Property allows to set width for the spinner component',
    },
    {
      name: 'height',
      type: 'string',
      defaultValue: '18px',
      descr: 'Property allows to set height for the spinner component',
    },
    {
      name: 'mode',
      type: '<a href="/docs/data-types">TSpinnerMode</a>',
      defaultValue: 'line',
      descr: 'Property allows to set mode for the spinner component',
    },
  ];

  outputs: TOutput[] = [];
}

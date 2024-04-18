import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import {
  SLIDE_TOGGLE_TITLE,
  SLIDE_TOGGLE_DESCRIPTION,
  SLIDE_TOGGLE_CODE,
} from './slide-toggle';

@Component({
  selector: 'app-slide-toggle-doc',
  templateUrl: './slide-toggle-doc.component.html',
  styleUrls: ['./slide-toggle-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideToggleDocComponent {
  title = SLIDE_TOGGLE_TITLE;
  description = SLIDE_TOGGLE_DESCRIPTION;
  code = SLIDE_TOGGLE_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set a title for the slide-toggle component',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr:
        'Property allows to set disabled state for the slide-toggle component',
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr:
        'Property allows to set readOnly state for the slide-toggle component',
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr:
        'Property allows to set visiblity state for the slide-toggle component',
    },
    {
      name: 'formControl',
      type: '<a href="https://angular.io/api/forms/FormControl">FormControl</a>&lt;boolean&gt;',
      defaultValue: 'FormControl<boolean | null>(null)',
      descr:
        'Property allows to set native angular form control to slide-toggle component',
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onChange',
      returnType: 'boolean | null',
      descr:
        'Property emits an event when the slide-toggle component gets new value',
    },
  ];
}

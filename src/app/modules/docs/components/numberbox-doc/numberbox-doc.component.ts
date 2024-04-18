import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import {
  NUMBERBOX_TITLE,
  NUMBERBOX_DESCRIPTION,
  NUMBERBOX_CODE,
} from './numberbox';

@Component({
  selector: 'app-numberbox-doc',
  templateUrl: './numberbox-doc.component.html',
  styleUrls: ['./numberbox-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberboxDocComponent {
  title = NUMBERBOX_TITLE;
  description = NUMBERBOX_DESCRIPTION;
  code = NUMBERBOX_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set a title for the numberbox component',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr:
        'Property allows to set disabled state for the numberbox component',
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set placeholder for the numberbox component',
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr:
        'Property allows to set readOnly state for the numberbox component',
    },
    {
      name: 'showClearButton',
      type: 'boolean',
      defaultValue: 'true',
      descr:
        'Property allows to set show clear button state for the numberbox component',
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr:
        'Property allows to set visiblity state for the numberbox component',
    },
    {
      name: 'formControl',
      type: '<a href="https://angular.io/api/forms/FormControl">FormControl</a>&lt;number&gt;',
      defaultValue: 'FormControl<number>(0)',
      descr:
        'Property allows to set native angular form control to numberbox component',
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onInput',
      returnType: 'number',
      descr:
        'Property emits an event when the numberbox component gets new symbol',
    },
    {
      name: 'onChange',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr:
        'Property emits an event when the numberbox component gets new value',
    },
    {
      name: 'onFocus',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: 'Property emits an event when the numberbox component gets focus',
    },
    {
      name: 'onBlur',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: 'Property emits an event when the numberbox component loses focus',
    },
    {
      name: 'onKeydown',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr:
        'Property emits an event when any key is down in the numberbox component',
    },
    {
      name: 'onKeyup',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: 'Property emits an event when any key is up in the v component',
    },
    {
      name: 'onKeypress',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr:
        'Property emits an event when any key is press in the numberbox component',
    },
    {
      name: 'onMousedown',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr:
        'Property emits an event when mouse key is down in the numberbox component',
    },
    {
      name: 'onMouseup',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr:
        'Property emits an event when mouse key is up in the numberbox component',
    },
    {
      name: 'onClick',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: 'Property emits an event when the numberbox component is clicked',
    },
  ];
}

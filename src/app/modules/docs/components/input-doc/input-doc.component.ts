import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { INPUT_TITLE, INPUT_DESCRIPTION, INPUT_CODE } from './input';

@Component({
  selector: 'app-input-doc',
  templateUrl: './input-doc.component.html',
  styleUrls: ['./input-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDocComponent {
  title = INPUT_TITLE;
  description = INPUT_DESCRIPTION;
  code = INPUT_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set a title for the input component',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to set disabled state for the input component',
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set placeholder for the input component',
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to set readOnly state for the input component',
    },
    {
      name: 'showClearButton',
      type: 'boolean',
      defaultValue: 'true',
      descr:
        'Property allows to set show clear button state for the input component',
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr: 'Property allows to set visiblity state for the input component',
    },
    {
      name: 'formControl',
      type: '<a href="https://angular.io/api/forms/FormControl">FormControl</a>&lt;string&gt;',
      defaultValue: "FormControl<string>('')",
      descr:
        'Property allows to set native angular form control to input component',
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onInput',
      returnType: 'string',
      descr: 'Property emits an event when the input component gets new symbol',
    },
    {
      name: 'onChange',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: 'Property emits an event when the input component gets new value',
    },
    {
      name: 'onFocus',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: 'Property emits an event when the input component gets focus',
    },
    {
      name: 'onBlur',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: 'Property emits an event when the input component loses focus',
    },
    {
      name: 'onKeydown',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr:
        'Property emits an event when any key is down in the input component',
    },
    {
      name: 'onKeyup',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr:
        'Property emits an event when any key is up in the input component',
    },
    {
      name: 'onKeypress',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr:
        'Property emits an event when any key is press in the input component',
    },
    {
      name: 'onMousedown',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr:
        'Property emits an event when mouse key is down in the input component',
    },
    {
      name: 'onMouseup',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr:
        'Property emits an event when mouse key is up in the input component',
    },
    {
      name: 'onClick',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: 'Property emits an event when the input component is clicked',
    },
  ];
}

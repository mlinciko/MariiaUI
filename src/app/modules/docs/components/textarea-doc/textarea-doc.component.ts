import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import {
  TEXTAREA_TITLE,
  TEXTAREA_DESCRIPTION,
  TEXTAREA_CODE,
} from './textarea';

@Component({
  selector: 'app-textarea-doc',
  templateUrl: './textarea-doc.component.html',
  styleUrls: ['./textarea-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaDocComponent {
  title = TEXTAREA_TITLE;
  description = TEXTAREA_DESCRIPTION;
  code = TEXTAREA_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set a title for the textarea component',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to set disabled state for the textarea component',
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set placeholder for the textarea component',
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to set readOnly state for the textarea component',
    },
    {
      name: 'showClearButton',
      type: 'boolean',
      defaultValue: 'true',
      descr:
        'Property allows to set show clear button state for the textarea component',
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr:
        'Property allows to set visiblity state for the textarea component',
    },
    {
      name: 'height',
      type: 'string',
      defaultValue: '80px',
      descr: 'Property allows to set height for the textarea component',
    },
    {
      name: 'maxLength',
      type: 'number | null',
      defaultValue: 'null',
      descr:
        'Property allows to set max text length for the textarea component',
    },
    {
      name: 'showCounter',
      type: 'boolean',
      defaultValue: 'false',
      descr:
        'Property allows to enable symbol counter for the textarea component',
    },
    {
      name: 'formControl',
      type: '<a href="https://angular.io/api/forms/FormControl">FormControl</a>&lt;string&gt;',
      defaultValue: "FormControl<string>('')",
      descr:
        'Property allows to set native angular form control to textarea component',
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onInput',
      returnType: 'string',
      descr:
        'Property emits an event when the textarea component gets new symbol',
    },
    {
      name: 'onChange',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr:
        'Property emits an event when the textarea component gets new value',
    },
    {
      name: 'onFocus',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: 'Property emits an event when the textarea component gets focus',
    },
    {
      name: 'onBlur',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: 'Property emits an event when the textarea component loses focus',
    },
    {
      name: 'onKeydown',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr:
        'Property emits an event when any key is down in the textarea component',
    },
    {
      name: 'onKeyup',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr:
        'Property emits an event when any key is up in the textarea component',
    },
    {
      name: 'onKeypress',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr:
        'Property emits an event when any key is press in the textarea component',
    },
    {
      name: 'onMousedown',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr:
        'Property emits an event when mouse key is down in the textarea component',
    },
    {
      name: 'onMouseup',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr:
        'Property emits an event when mouse key is up in the textarea component',
    },
    {
      name: 'onClick',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: 'Property emits an event when the textarea component is clicked',
    },
  ];
}

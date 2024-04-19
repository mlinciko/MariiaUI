import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { TEXTAREA_TITLE, TEXTAREA_CODE } from './textarea';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-textarea-doc',
  templateUrl: './textarea-doc.component.html',
  styleUrls: ['./textarea-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaDocComponent {
  constructor(private translationService: TranslationService) {}
  title = TEXTAREA_TITLE;
  description = this.translationService.translate('docs.textarea.description');
  code = TEXTAREA_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.textarea.label'),
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.textarea.disabled'),
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.textarea.placeholder'),
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.textarea.readOnly'),
    },
    {
      name: 'showClearButton',
      type: 'boolean',
      defaultValue: 'true',
      descr: this.translationService.translate('docs.textarea.showClearButton'),
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr: this.translationService.translate('docs.textarea.visible'),
    },
    {
      name: 'height',
      type: 'string',
      defaultValue: '80px',
      descr: this.translationService.translate('docs.textarea.height'),
    },
    {
      name: 'maxLength',
      type: 'number | null',
      defaultValue: 'null',
      descr: this.translationService.translate('docs.textarea.maxLength'),
    },
    {
      name: 'showCounter',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.textarea.showCounter'),
    },
    {
      name: 'formControl',
      type: '<a href="https://angular.io/api/forms/FormControl">FormControl</a>&lt;string&gt;',
      defaultValue: "FormControl<string>('')",
      descr: this.translationService.translate('docs.textarea.formControl'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onInput',
      returnType: 'string',
      descr: this.translationService.translate('docs.textarea.onInput'),
    },
    {
      name: 'onChange',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.textarea.onChange'),
    },
    {
      name: 'onFocus',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.textarea.onFocus'),
    },
    {
      name: 'onBlur',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.textarea.onBlur'),
    },
    {
      name: 'onKeydown',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.textarea.onKeydown'),
    },
    {
      name: 'onKeyup',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.textarea.onKeyup'),
    },
    {
      name: 'onKeypress',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.textarea.onKeypress'),
    },
    {
      name: 'onMousedown',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.textarea.onMousedown'),
    },
    {
      name: 'onMouseup',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.textarea.onMouseup'),
    },
    {
      name: 'onClick',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.textarea.onClick'),
    },
  ];
}

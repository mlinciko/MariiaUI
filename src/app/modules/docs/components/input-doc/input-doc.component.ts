import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { INPUT_TITLE, INPUT_CODE } from './input';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-input-doc',
  templateUrl: './input-doc.component.html',
  styleUrls: ['./input-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDocComponent {
  constructor(private translationService: TranslationService) {}
  title = INPUT_TITLE;
  description = this.translationService.translate('docs.input.description');
  code = INPUT_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.input.label'),
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.input.disabled'),
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.input.placeholder'),
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.input.readOnly'),
    },
    {
      name: 'showClearButton',
      type: 'boolean',
      defaultValue: 'true',
      descr: this.translationService.translate('docs.input.showClearButton'),
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr: this.translationService.translate('docs.input.visible'),
    },
    {
      name: 'formControl',
      type: '<a href="https://angular.io/api/forms/FormControl">FormControl</a>&lt;string&gt;',
      defaultValue: "FormControl<string>('')",
      descr: this.translationService.translate('docs.input.formControl'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onInput',
      returnType: 'string',
      descr: this.translationService.translate('docs.input.onInput'),
    },
    {
      name: 'onChange',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.input.onChange'),
    },
    {
      name: 'onFocus',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.input.onFocus'),
    },
    {
      name: 'onBlur',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.input.onBlur'),
    },
    {
      name: 'onKeydown',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.input.onKeydown'),
    },
    {
      name: 'onKeyup',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.input.onKeyup'),
    },
    {
      name: 'onKeypress',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.input.onKeypress'),
    },
    {
      name: 'onMousedown',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.input.onMousedown'),
    },
    {
      name: 'onMouseup',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.input.onMouseup'),
    },
    {
      name: 'onClick',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.input.onClick'),
    },
  ];
}

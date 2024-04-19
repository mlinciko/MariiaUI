import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { NUMBERBOX_TITLE, NUMBERBOX_CODE } from './numberbox';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-numberbox-doc',
  templateUrl: './numberbox-doc.component.html',
  styleUrls: ['./numberbox-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberboxDocComponent {
  constructor(private translationService: TranslationService) {}
  title = NUMBERBOX_TITLE;
  description = this.translationService.translate('docs.numberbox.description');
  code = NUMBERBOX_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.numberbox.label'),
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.numberbox.disabled'),
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.numberbox.placeholder'),
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.numberbox.readOnly'),
    },
    {
      name: 'showClearButton',
      type: 'boolean',
      defaultValue: 'true',
      descr: this.translationService.translate(
        'docs.numberbox.showClearButton'
      ),
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr: this.translationService.translate('docs.numberbox.visible'),
    },
    {
      name: 'formControl',
      type: '<a href="https://angular.io/api/forms/FormControl">FormControl</a>&lt;number&gt;',
      defaultValue: 'FormControl<number>(0)',
      descr: this.translationService.translate('docs.numberbox.formControl'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onInput',
      returnType: 'number',
      descr: this.translationService.translate('docs.numberbox.onInput'),
    },
    {
      name: 'onChange',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.numberbox.onChange'),
    },
    {
      name: 'onFocus',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.numberbox.onFocus'),
    },
    {
      name: 'onBlur',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.numberbox.onBlur'),
    },
    {
      name: 'onKeydown',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.numberbox.onKeydown'),
    },
    {
      name: 'onKeyup',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.numberbox.onKeyup'),
    },
    {
      name: 'onKeypress',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.numberbox.onKeypress'),
    },
    {
      name: 'onMousedown',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.numberbox.onMousedown'),
    },
    {
      name: 'onMouseup',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.numberbox.onMouseup'),
    },
    {
      name: 'onClick',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.numberbox.onClick'),
    },
  ];
}

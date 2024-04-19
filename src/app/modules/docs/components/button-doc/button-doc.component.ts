import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { BUTTON_TITLE, BUTON_CODE } from './button';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-button-doc',
  templateUrl: './button-doc.component.html',
  styleUrls: ['./button-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDocComponent {
  constructor(private translationService: TranslationService) {}
  title = BUTTON_TITLE;
  description = this.translationService.translate('docs.button.description');
  code = BUTON_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.button.label'),
    },
    {
      name: 'type',
      type: '<a href="/docs/data-types">ButtonTypeEnum</a>',
      defaultValue: 'ButtonTypeEnum.Default',
      descr: this.translationService.translate('docs.button.type'),
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.button.disabled'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onClick',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.button.onClick'),
    },
  ];
}

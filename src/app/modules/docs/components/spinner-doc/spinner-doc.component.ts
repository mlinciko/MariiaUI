import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { SPINNER_TITLE, SPINNER_CODE } from './spinner';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-spinner-doc',
  templateUrl: './spinner-doc.component.html',
  styleUrls: ['./spinner-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerDocComponent {
  constructor(private translationService: TranslationService) {}
  title = SPINNER_TITLE;
  description = this.translationService.translate('docs.spinner.description');
  code = SPINNER_CODE;

  inputs: TInput[] = [
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.spinner.visible'),
    },
    {
      name: 'color',
      type: 'string',
      defaultValue: '#cecece',
      descr: this.translationService.translate('docs.spinner.color'),
    },
    {
      name: 'width',
      type: 'string',
      defaultValue: '18px',
      descr: this.translationService.translate('docs.spinner.width'),
    },
    {
      name: 'height',
      type: 'string',
      defaultValue: '18px',
      descr: this.translationService.translate('docs.spinner.height'),
    },
    {
      name: 'mode',
      type: '<a href="/docs/data-types">TSpinnerMode</a>',
      defaultValue: 'line',
      descr: this.translationService.translate('docs.spinner.mode'),
    },
  ];

  outputs: TOutput[] = [];
}

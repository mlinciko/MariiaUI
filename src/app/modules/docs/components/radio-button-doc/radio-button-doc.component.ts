import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { RADIO_BUTTON_TITLE, RADIO_BUTTON_CODE } from './radio-button';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-radio-button-doc',
  templateUrl: './radio-button-doc.component.html',
  styleUrls: ['./radio-button-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonDocComponent {
  constructor(private translationService: TranslationService) {}
  title = RADIO_BUTTON_TITLE;
  description = this.translationService.translate(
    'docs.radioButton.description'
  );
  code = RADIO_BUTTON_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.radioButton.label'),
    },
    {
      name: 'isChecked',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.radioButton.isChecked'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onChange',
      returnType: `void`,
      descr: this.translationService.translate('docs.radioButton.onChange'),
    },
  ];
}

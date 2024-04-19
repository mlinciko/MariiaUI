import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { RADIO_GROUP_TITLE, RADIO_GROUP_CODE } from './radio-group';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-radio-group-doc',
  templateUrl: './radio-group-doc.component.html',
  styleUrls: ['./radio-group-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupDocComponent {
  constructor(private translationService: TranslationService) {}
  title = RADIO_GROUP_TITLE;
  description = this.translationService.translate(
    'docs.radioGroup.description'
  );
  code = RADIO_GROUP_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.radioGroup.label'),
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.radioGroup.disabled'),
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.radioGroup.readOnly'),
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr: this.translationService.translate('docs.radioGroup.visible'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onChange',
      returnType: `string | null`,
      descr: this.translationService.translate('docs.radioGroup.onChange'),
    },
  ];
}

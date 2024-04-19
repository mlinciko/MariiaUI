import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { CHECKBOX_TITLE, CHECKBOX_CODE } from './checkbox';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-checkbox-doc',
  templateUrl: './checkbox-doc.component.html',
  styleUrls: ['./checkbox-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxDocComponent {
  constructor(private translationService: TranslationService) {}
  title = CHECKBOX_TITLE;
  description = this.translationService.translate('docs.checkbox.description');
  code = CHECKBOX_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.checkbox.label'),
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.checkbox.disabled'),
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.checkbox.readOnly'),
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr: this.translationService.translate('docs.checkbox.visible'),
    },
    {
      name: 'formControl',
      type: '<a href="https://angular.io/api/forms/FormControl">FormControl&lt;boolean | null&gt;</a>',
      defaultValue: 'FormControl<boolean | null>(null)',
      descr: this.translationService.translate('docs.checkbox.formControl'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onChange',
      returnType: 'boolean | null',
      descr: this.translationService.translate('docs.checkbox.onChange'),
    },
  ];
}

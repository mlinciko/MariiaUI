import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { SLIDE_TOGGLE_TITLE, SLIDE_TOGGLE_CODE } from './slide-toggle';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-slide-toggle-doc',
  templateUrl: './slide-toggle-doc.component.html',
  styleUrls: ['./slide-toggle-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideToggleDocComponent {
  constructor(private translationService: TranslationService) {}
  title = SLIDE_TOGGLE_TITLE;
  description = this.translationService.translate(
    'docs.slideToggle.description'
  );
  code = SLIDE_TOGGLE_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.slideToggle.label'),
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.slideToggle.disabled'),
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.slideToggle.readOnly'),
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr: this.translationService.translate('docs.slideToggle.visible'),
    },
    {
      name: 'formControl',
      type: '<a href="https://angular.io/api/forms/FormControl">FormControl</a>&lt;boolean&gt;',
      defaultValue: 'FormControl<boolean | null>(null)',
      descr: this.translationService.translate('docs.slideToggle.formControl'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onChange',
      returnType: 'boolean | null',
      descr: this.translationService.translate('docs.slideToggle.onChange'),
    },
  ];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { DATE_PICKER_TITLE, DATE_PICKER_CODE } from './date-picker';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-date-picker-doc',
  templateUrl: './date-picker-doc.component.html',
  styleUrls: ['./date-picker-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerDocComponent {
  constructor(private translationService: TranslationService) {}
  title = DATE_PICKER_TITLE;
  description = this.translationService.translate(
    'docs.datePicker.description'
  );
  code = DATE_PICKER_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.datePicker.label'),
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.datePicker.disabled'),
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.datePicker.placeholder'),
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.datePicker.readOnly'),
    },
    {
      name: 'showClearButton',
      type: 'boolean',
      defaultValue: 'true',
      descr: this.translationService.translate(
        'docs.datePicker.showClearButton'
      ),
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr: this.translationService.translate('docs.datePicker.visible'),
    },
    {
      name: 'dateMask',
      type: 'string',
      defaultValue: 'dd.MM.YYYY',
      descr: this.translationService.translate('docs.datePicker.dateMask'),
    },
    {
      name: 'formControl',
      type: '<a href="https://angular.io/api/forms/FormControl">FormControl&lt;Date | null&gt;</a>',
      defaultValue: 'FormControl<Date | null>(null)',
      descr: this.translationService.translate('docs.datePicker.formControl'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onChange',
      returnType:
        '<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a>',
      descr: this.translationService.translate('docs.datePicker.onChange'),
    },
    {
      name: 'onClick',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: this.translationService.translate('docs.datePicker.onClick'),
    },
    {
      name: 'onCalendarVisibilityChanged',
      returnType: 'boolean',
      descr: this.translationService.translate(
        'docs.datePicker.onCalendarVisibilityChanged'
      ),
    },
  ];
}

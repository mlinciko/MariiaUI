import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import {
  DATE_PICKER_TITLE,
  DATE_PICKER_DESCRIPTION,
  DATE_PICKER_CODE,
} from './date-picker';

@Component({
  selector: 'app-date-picker-doc',
  templateUrl: './date-picker-doc.component.html',
  styleUrls: ['./date-picker-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerDocComponent {
  title = DATE_PICKER_TITLE;
  description = DATE_PICKER_DESCRIPTION;
  code = DATE_PICKER_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set a title for the date-picker component',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr:
        'Property allows to set disabled state for the date-picker component',
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set placeholder for the date-picker component',
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr:
        'Property allows to set readOnly state for the date-picker component',
    },
    {
      name: 'showClearButton',
      type: 'boolean',
      defaultValue: 'true',
      descr:
        'Property allows to set show clear button state for the date-picker component',
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr:
        'Property allows to set visiblity state for the date-picker component',
    },
    {
      name: 'dateMask',
      type: 'string',
      defaultValue: 'dd.MM.YYYY',
      descr:
        'Property allows to set date mask state for the date-picker component',
    },
    {
      name: 'formControl',
      type: '<a href="https://angular.io/api/forms/FormControl">FormControl&lt;Date | null&gt;</a>',
      defaultValue: 'FormControl<Date | null>(null)',
      descr:
        'Property allows to set native angular form control to date-picker component',
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onChange',
      returnType:
        '<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a>',
      descr: 'Emits an event when the date-picker component gets new value',
    },
    {
      name: 'onClick',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>',
      descr: 'Emits an event when the date-picker component is clicked',
    },
    {
      name: 'onCalendarVisibilityChanged',
      returnType: 'boolean',
      descr:
        "Emits an event when the date-picker component calender's visibility state changes",
    },
  ];
}

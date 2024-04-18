import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-picker-demo',
  templateUrl: './date-picker-demo.component.html',
  styleUrls: ['./date-picker-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerDemoComponent {
  title = 'DatePicker';
  componentCode = `
  import { Component } from '@angular/core';
  import { FormControl } from '@angular/forms';
  
  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    label = 'Birth date';
    placeholder = 'Select a date';
    dateMask = 'dd/MM/yyyy';
    datePickerControl: FormControl<Date | null> = new FormControl(new Date());
  
    onDateChanged(selectedDate: Date): void {
      return;
    }
  }`;
  templateCode = `<mui-date-picker
  [label]="label"
  [placeholder]="placeholder"
  [showClearButton]="true"
  [dateMask]="dateMask"
  [disabled]="false"
  [readOnly]="false"
  [formControl]="datePickerControl"
  (onChange)="onDateChanged($event)"></mui-date-picker>`;

  label = 'Birth date';
  placeholder = 'Select a date';
  dateMask = 'dd/MM/yyyy';
  datePickerControl: FormControl<Date | null> = new FormControl(new Date());

  onDateChanged(selectedDate: Date): void {
    return;
  }
}

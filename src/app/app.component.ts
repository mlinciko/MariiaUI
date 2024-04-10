import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ButtonTypeEnum } from 'projects/mariia-ui/src/lib/components/button/button';
import { TDropdownOption } from 'projects/mariia-ui/src/lib/components/dropdown/option';
import { TPieChartSeries } from 'projects/mariia-ui/src/lib/components/pie-chart/pie-chart';
import {
  ColumnTypes,
  TColumn,
} from 'projects/mariia-ui/src/lib/components/table/table';
import { NotificationService } from 'projects/mariia-ui/src/public-api';

const options: TDropdownOption[] = [
  {
    key: 1,
    value: 'Option 1',
  },
  {
    key: 2,
    value: 'Option 2',
  },
  {
    key: 3,
    value: 'Option 3',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private notificationService: NotificationService) {}

  /*Input */
  inputControl = new FormControl('start', [Validators.required]);

  onInput(e: any): void {
    console.log('input: ', e);
  }

  /*Dropdown */
  dropdownControl = new FormControl(options[0], [Validators.required]);
  options = options;
  dropdownPlaceholder = 'Введите значение';

  onSelectionChange(e: any): void {
    console.log('dropdown: ', e);
  }

  /*Table */
  tableData = [
    { id: 1, name: 'Mariia', age: 22, sex: { key: 1, value: 'F' } },
    { id: 2, name: 'Kristina', age: 22, sex: { key: 1, value: 'F' } },
    { id: 3, name: 'Karina', age: 21, sex: { key: 1, value: 'F' } },
    { id: 4, name: 'Ulyana', age: 21, sex: { key: 1, value: 'F' } },
  ];
  columns: TColumn[] = [
    {
      id: 1,
      key: 'name',
      name: 'Имя',
      type: ColumnTypes.String,
      order: 1,
      required: true,
      disabled: false,
      size: '50%',
    },
    {
      id: 2,
      key: 'age',
      name: 'Возраст',
      type: ColumnTypes.Number,
      order: 2,
      required: true,
      disabled: false,
      size: '25%',
    },
    {
      id: 3,
      key: 'sex',
      name: 'Пол',
      type: ColumnTypes.Dropdown,
      order: 3,
      required: true,
      disabled: false,
      size: '25%',
      options: [
        { key: 1, value: 'F' },
        { key: 2, value: 'M' },
      ],
    },
  ];

  /*Checkbox */
  checkboxControl = new FormControl(null, [Validators.requiredTrue]);

  /*PieChart */
  pieChartSiries: TPieChartSeries[] = [
    {
      percent: 10,
      label: 'Студент получил оценку 1',
    },
    {
      percent: 20,
      label: 'Студент получил оценку 2',
    },
    {
      percent: 30,
      label: 'Студент получил оценку 3',
    },
    {
      percent: 40,
      label: 'Студент получил оценку 4',
    },
    {
      percent: 50,
      label: 'Студент получил оценку 5',
    },
  ];

  /*Notification */
  showNotification(): void {
    this.notificationService.default('Default message' + new Date().getTime());
    // this.notificationService.warning('Warning message');
    // this.notificationService.error('Error message');
    // this.notificationService.success('Succes message');
  }

  /*Textarea */
  texareaControl = new FormControl('Some text', [Validators.maxLength(5)]);

  /*Button */
  readonly ButtonTypeEnum = ButtonTypeEnum;

  /*Slide Toggle */
  slideToggleControl = new FormControl(null, [Validators.requiredTrue]);

  /*Number Box */
  numberBoxControl = new FormControl(null, [Validators.required]);

  /*Date Picker */
  datePickerControl = new FormControl(null, [Validators.required]);

  onDateChanged(): void {
    console.log(this.datePickerControl);
  }

  /*List */
  listItems = [
    {
      name: 'Marria',
    },
    {
      name: 'Ulyana',
    },
    {
      name: 'Kristina',
    },
    {
      name: 'Karina',
    },
  ];
  listAccessor = (item: any) => item.name;
}

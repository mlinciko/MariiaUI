import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TDropdownOption } from 'projects/mariia-ui/src/lib/dropdown/option';

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
  /*Input */
  inputControl = new FormControl('start', [Validators.maxLength(5)]);

  onInput(e: any): void {
    console.log('input: ', e);
  }

  /*Dropdown */
  dropdownControl = new FormControl(options[0]);
  options = options;
  dropdownPlaceholder = 'Введите значение';

  onSelectionChange(e: any): void {
    console.log('dropdown: ', e);
  }
}

/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mui-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent {
  /*Input params */
  @Input() label = '';
  @Input() isChecked = false;

  /*Output events */
  @Output() onChange: EventEmitter<void> = new EventEmitter();
}

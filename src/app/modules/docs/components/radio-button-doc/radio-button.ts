export const RADIO_BUTTON_TITLE = 'RadioButton';
export const RADIO_BUTTON_DESCRIPTION =
  'UI component is a part of radio-group component';
export const RADIO_BUTTON_CODE = `/*Input params */
@Input() label = '';
@Input() isChecked = false;

/*Output events */
@Output() onChange: EventEmitter<void> = new EventEmitter();`;

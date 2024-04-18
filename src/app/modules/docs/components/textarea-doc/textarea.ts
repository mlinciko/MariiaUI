export const TEXTAREA_TITLE = 'Textarea';
export const TEXTAREA_DESCRIPTION =
  'UI component is text field for entering data in several lines. Allows the user to enter text using standard input sources. Has a counter of entered characters';
export const TEXTAREA_CODE = `/*Input params */
@Input() label = '';
@Input() disabled = false;
@Input() placeholder = '';
@Input() readOnly = false;
@Input() showClearButton = true;
@Input() visible = true;
@Input() height = '80px';
@Input() maxLength: number | null = null;
@Input() showCounter = false;
@Input() formControl: FormControl = new FormControl<string>('');

/*Output events */
@Output() onInput: EventEmitter<string> = new EventEmitter();
@Output() onChange: EventEmitter<Event> = new EventEmitter();
@Output() onFocus: EventEmitter<Event> = new EventEmitter();
@Output() onBlur: EventEmitter<Event> = new EventEmitter();
@Output() onKeydown: EventEmitter<Event> = new EventEmitter();
@Output() onKeyup: EventEmitter<Event> = new EventEmitter();
@Output() onKeypress: EventEmitter<Event> = new EventEmitter();
@Output() onScroll: EventEmitter<Event> = new EventEmitter();
@Output() onClick: EventEmitter<Event> = new EventEmitter();`;

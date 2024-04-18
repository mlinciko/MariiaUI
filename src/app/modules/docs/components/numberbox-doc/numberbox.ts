export const NUMBERBOX_TITLE = 'Numberbox';
export const NUMBERBOX_DESCRIPTION =
  'UI component allows to enter numbers using standard input sources';
export const NUMBERBOX_CODE = `/*Input params */
@Input() label = '';
@Input() disabled = false;
@Input() placeholder = '';
@Input() readOnly = false;
@Input() showClearButton = true;
@Input() visible = true;
@Input() formControl: FormControl = new FormControl<number>(0);

/*Output events */
@Output() onInput: EventEmitter<string> = new EventEmitter();
@Output() onChange: EventEmitter<Event> = new EventEmitter();
@Output() onFocus: EventEmitter<Event> = new EventEmitter();
@Output() onBlur: EventEmitter<Event> = new EventEmitter();
@Output() onKeydown: EventEmitter<Event> = new EventEmitter();
@Output() onKeyup: EventEmitter<Event> = new EventEmitter();
@Output() onKeypress: EventEmitter<Event> = new EventEmitter();
@Output() onMousedown: EventEmitter<Event> = new EventEmitter();
@Output() onMouseup: EventEmitter<Event> = new EventEmitter();
@Output() onClick: EventEmitter<Event> = new EventEmitter();`;

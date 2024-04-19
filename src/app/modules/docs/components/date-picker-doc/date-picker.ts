export const DATE_PICKER_TITLE = 'DatePicker';
export const DATE_PICKER_CODE = `/*Input params */
@Input() label = '';
@Input() disabled = false;
@Input() placeholder = '';
@Input() readOnly = false;
@Input() showClearButton = true;
@Input() visible = true;
@Input() dateMask = 'dd.MM.YYYY';
@Input() formControl: FormControl = new FormControl<Date | null>(null);

/*Output events */
@Output() onChange: EventEmitter<Date> = new EventEmitter();
@Output() onClick: EventEmitter<Event> = new EventEmitter();
@Output() onCalendarVisibilityChanged: EventEmitter<boolean> = new EventEmitter();`;

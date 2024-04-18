export const CHECKBOX_TITLE = 'Checkbox';
export const CHECKBOX_DESCRIPTION =
  'UI component that allows to select one or more options from a given list';
export const CHECKBOX_CODE = `/*Input params */
@Input() label = '';
@Input() disabled = false;
@Input() readOnly = false;
@Input() visible = true;
@Input() formControl: FormControl = new FormControl<boolean | null>(null);

/*Output events */
@Output() onChange: EventEmitter<boolean | null> = new EventEmitter();`;

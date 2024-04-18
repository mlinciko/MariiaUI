export const SLIDE_TOGGLE_TITLE = 'SlideToggle';
export const SLIDE_TOGGLE_DESCRIPTION =
  'UI component that allows to choose between two states';
export const SLIDE_TOGGLE_CODE = `/*Input params */
@Input() label = '';
@Input() disabled = false;
@Input() readOnly = false;
@Input() visible = true;
@Input() formControl: FormControl = new FormControl<boolean | null>(null);

/*Output events */
@Output() onChange: EventEmitter<boolean | null> = new EventEmitter();`;

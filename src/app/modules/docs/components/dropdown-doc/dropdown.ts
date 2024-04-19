export const DROPDOWN_TITLE = 'Dropdown';
export const DROPDOWN_CODE = `/*Input params */
@Input() options: TDropdownOption[] = [];
@Input() label = '';
@Input() disabled = false;
@Input() placeholder = '';
@Input() readOnly = false;
@Input() showClearButton = true;
@Input() visible = true;
@Input() formControl: FormControl = new FormControl<TDropdownOption | null>(null);

/*Output events */
@Output() onSelectionChange: EventEmitter<TDropdownOption> = new EventEmitter();
@Output() onOptionsVisibilityChange: EventEmitter<boolean> = new EventEmitter();`;

export const LOOKUP_TITLE = 'Lookup';
export const LOOKUP_CODE = `/*Input params */
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
@Output() onSearchChange: EventEmitter<string> = new EventEmitter();
@Output() onOptionsVisibilityChange: EventEmitter<boolean> = new EventEmitter();`;

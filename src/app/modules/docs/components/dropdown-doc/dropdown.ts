export const DROPDOWN_TITLE = 'Dropdown';
export const DROPDOWN_DESCRIPTION =
  'UI component allows the user to select one option from a predefined list that appears when clicking on a field';
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

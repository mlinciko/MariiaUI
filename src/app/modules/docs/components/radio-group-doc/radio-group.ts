export const RADIO_GROUP_TITLE = 'RadioGroup';
export const RADIO_GROUP_CODE = `/*Input params */
@Input() label = '';
@Input() disabled = false;
@Input() readOnly = false;
@Input() visible = true;

/*Output events */
@Output() onChange: EventEmitter<string | null> = new EventEmitter();`;

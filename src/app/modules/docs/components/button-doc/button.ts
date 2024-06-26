export const BUTTON_TITLE = 'Button';
export const BUTON_CODE = `/*Input params */
@Input() label = '';
@Input() type: ButtonTypeEnum = ButtonTypeEnum.Default;
@Input() disabled = false;

/*Output events */
@Output() onClick: EventEmitter<Event> = new EventEmitter();`;

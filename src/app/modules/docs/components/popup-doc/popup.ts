export const POPUP_TITLE = 'Popup';
export const POPUP_CODE = `/*Input params */
@Input() title = '';
@Input() buttons: TPopupButton[] = [];
@Input() showCloseBtn = true;
@Input() visible = false;
@Input() width = '400px';
@Input() height = '200px';
@Input() top = '40%';
@Input() left = '38%';

/*Output events */
@Output() onPopupClose: EventEmitter<void> = new EventEmitter();
@Output() visibleChange = new EventEmitter<boolean>();`;

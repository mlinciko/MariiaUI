export const ACCORDION_ITEM_CODE = `/*Input params */
@Input() label = '';
@Input() isExpanded = false;

/*Output events */
@Output() onChange: EventEmitter<void> = new EventEmitter();`;
export const ACCORDION_TITLE = 'Accordion Item';

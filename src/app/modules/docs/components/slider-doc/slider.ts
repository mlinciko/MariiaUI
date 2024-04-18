export const SLIDER_TITLE = 'Slider';
export const SLIDER_DESCRIPTION =
  'UI components represents an element that allows the user to view a series of images by switching them forward or backward';
export const SLIDER_CODE = `/*Input params */
@Input() showDots = true;
@Input() width = '100%';
@Input() slideWidth = 200;
@Input() gap = 20;

/*Output events */
@Output() onSlideActiveChange: EventEmitter<number> = new EventEmitter();`;

export const LIST_TITLE = 'List';
export const LIST_DESCRIPTION =
  'UI component represents an element that is used to display an ordered set of elements as a vertical list. Component can be numbered or unnumbered.';
export const LIST_CODE = `/*Input params */
@Input() label = '';
@Input() items: any[] = [];
@Input() isNumbered = false;
@Input() accessor: (item: any) => any = (item: any) => item;`;

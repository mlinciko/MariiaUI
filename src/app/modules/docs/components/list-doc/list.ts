export const LIST_TITLE = 'List';
export const LIST_CODE = `/*Input params */
@Input() label = '';
@Input() items: any[] = [];
@Input() isNumbered = false;
@Input() accessor: (item: any) => any = (item: any) => item;`;

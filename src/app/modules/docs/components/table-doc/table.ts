export const TABLE_TITLE = 'Table';
export const TABLE_CODE = `/*Input params */
@Input() data: TRow[] = [];
@Input() columns: TColumn[] = [];
@Input() addingEnabled = false;
@Input() editingEnabled = false;
@Input() deletingEnabled = false;
@Input() sortingEnabled = false;
@Input() filteringEnabled = false;
@Input() paginationEnabled = false;
@Input() pageSizes: number[] = [10, 25, 50, 100];
@Input() height = '300px';
@Input() width = '100%';

/*Output events */
@Output() onRowAdded: EventEmitter<TRow> = new EventEmitter();
@Output() onRowSaved: EventEmitter<TRow> = new EventEmitter();
@Output() onRowEdited: EventEmitter<TRow> = new EventEmitter();
@Output() onRowDeleted: EventEmitter<TRow> = new EventEmitter();
@Output() onFilterChange: EventEmitter<TCell[]> = new EventEmitter();
@Output() onSortingChange: EventEmitter<TSorting> = new EventEmitter();
@Output() onPaginationChange: EventEmitter<TPageParams> = new EventEmitter();`;

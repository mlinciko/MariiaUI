import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { TABLE_TITLE, TABLE_DESCRIPTION, TABLE_CODE } from './table';

@Component({
  selector: 'app-table-doc',
  templateUrl: './table-doc.component.html',
  styleUrls: ['./table-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableDocComponent {
  title = TABLE_TITLE;
  description = TABLE_DESCRIPTION;
  code = TABLE_CODE;

  inputs: TInput[] = [
    {
      name: 'data',
      type: '<a href="/docs/data-types">TRow</a>[]',
      defaultValue: '[]',
      descr: 'Property allows to set data for the table component',
    },
    {
      name: 'columns',
      type: '<a href="/docs/data-types">TColumn</a>[]',
      defaultValue: '[]',
      descr: 'Property allows to set columns for the table component',
    },
    {
      name: 'addingEnabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to enable adding for the table component',
    },
    {
      name: 'editingEnabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to enable editing for the table component',
    },
    {
      name: 'deletingEnabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to enable deleting for the table component',
    },
    {
      name: 'sortingEnabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to enable sorting for the table component',
    },
    {
      name: 'filteringEnabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to enable filtering for the table component',
    },
    {
      name: 'paginationEnabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to enable pagination for the table component',
    },
    {
      name: 'pageSizes',
      type: 'number[]',
      defaultValue: '[10, 25, 50, 100]',
      descr:
        'Property allows to set page sizes for pagination for the table component',
    },
    {
      name: 'width',
      type: 'string',
      defaultValue: 'auto',
      descr: 'Property allows to set width for the table component',
    },
    {
      name: 'height',
      type: 'string',
      defaultValue: '100%',
      descr: 'Property allows to set height for the table component',
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onRowAdded',
      returnType: '<a href="/docs/data-types">TRow</a>',
      descr:
        'Property emits an event when the new row is added to table component',
    },
    {
      name: 'onRowSaved',
      returnType: '<a href="/docs/data-types">TRow</a>',
      descr:
        'Property emits an event when the new row is saved in table component',
    },
    {
      name: 'onRowEdited',
      returnType: '<a href="/docs/data-types">TRow</a>',
      descr:
        'Property emits an event when the row is edited in table component',
    },
    {
      name: 'onRowDeleted',
      returnType: '<a href="/docs/data-types">TRow</a>',
      descr:
        'Property emits an event when the row is deleted in table component',
    },
    {
      name: 'onFilterChange',
      returnType: '<a href="/docs/data-types">TCell</a>[]',
      descr:
        'Property emits an event when the table component filtering changes',
    },
    {
      name: 'onSortingChange',
      returnType: '<a href="/docs/data-types">TSorting</a>',
      descr: 'Property emits an event when the table component sorting changes',
    },
    {
      name: 'onPaginationChange',
      returnType: '<a href="/docs/data-types">TPageParams</a>',
      descr:
        'Property emits an event when the table component pagination changes',
    },
  ];
}

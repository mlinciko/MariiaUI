import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { TABLE_TITLE, TABLE_CODE } from './table';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-table-doc',
  templateUrl: './table-doc.component.html',
  styleUrls: ['./table-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableDocComponent {
  constructor(private translationService: TranslationService) {}
  title = TABLE_TITLE;
  description = this.translationService.translate('docs.table.description');
  code = TABLE_CODE;

  inputs: TInput[] = [
    {
      name: 'data',
      type: '<a href="/docs/data-types">TRow</a>[]',
      defaultValue: '[]',
      descr: this.translationService.translate('docs.table.data'),
    },
    {
      name: 'columns',
      type: '<a href="/docs/data-types">TColumn</a>[]',
      defaultValue: '[]',
      descr: this.translationService.translate('docs.table.columns'),
    },
    {
      name: 'addingEnabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.table.addingEnabled'),
    },
    {
      name: 'editingEnabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.table.editingEnabled'),
    },
    {
      name: 'deletingEnabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.table.deletingEnabled'),
    },
    {
      name: 'sortingEnabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.table.sortingEnabled'),
    },
    {
      name: 'filteringEnabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.table.filteringEnabled'),
    },
    {
      name: 'paginationEnabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.table.paginationEnabled'),
    },
    {
      name: 'pageSizes',
      type: 'number[]',
      defaultValue: '[10, 25, 50, 100]',
      descr: this.translationService.translate('docs.table.pageSizes'),
    },
    {
      name: 'width',
      type: 'string',
      defaultValue: 'auto',
      descr: this.translationService.translate('docs.table.width'),
    },
    {
      name: 'height',
      type: 'string',
      defaultValue: '100%',
      descr: this.translationService.translate('docs.table.height'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onRowAdded',
      returnType: '<a href="/docs/data-types">TRow</a>',
      descr: this.translationService.translate('docs.table.onRowAdded'),
    },
    {
      name: 'onRowSaved',
      returnType: '<a href="/docs/data-types">TRow</a>',
      descr: this.translationService.translate('docs.table.onRowSaved'),
    },
    {
      name: 'onRowEdited',
      returnType: '<a href="/docs/data-types">TRow</a>',
      descr: this.translationService.translate('docs.table.onRowEdited'),
    },
    {
      name: 'onRowDeleted',
      returnType: '<a href="/docs/data-types">TRow</a>',
      descr: this.translationService.translate('docs.table.onRowDeleted'),
    },
    {
      name: 'onFilterChange',
      returnType: '<a href="/docs/data-types">TCell</a>[]',
      descr: this.translationService.translate('docs.table.onFilterChange'),
    },
    {
      name: 'onSortingChange',
      returnType: '<a href="/docs/data-types">TSorting</a>',
      descr: this.translationService.translate('docs.table.onSortingChange'),
    },
    {
      name: 'onPaginationChange',
      returnType: '<a href="/docs/data-types">TPageParams</a>',
      descr: this.translationService.translate('docs.table.onPaginationChange'),
    },
  ];
}

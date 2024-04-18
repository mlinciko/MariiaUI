/* eslint-disable @angular-eslint/no-output-on-prefix */
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  WritableSignal,
  signal,
} from '@angular/core';
import {
  ColumnTypes,
  DEFAULT_PAGES_AMOUNT,
  TCell,
  TColumn,
  TPageParams,
  TRow,
  TSorting,
} from './table';
import { TableUtils } from './table-utils';
import { FormControl } from '@angular/forms';
import { TableService } from '../../services/table/table.service';
import { TDropdownOption } from '../dropdown/option';
import { NotificationService } from '../../services/notification/notification.service';
import { TranslationService } from '../../services/translation/translation.service';

@Component({
  selector: 'mui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  /*Input params */
  @Input() data: TRow[] = [];
  @Input() columns: TColumn[] = [];
  @Input() addingEnabled = false;
  @Input() editingEnabled = false;
  @Input() deletingEnabled = false;
  @Input() sortingEnabled = false;
  @Input() filteringEnabled = false;
  @Input() paginationEnabled = false;
  @Input() pageSizes: number[] = DEFAULT_PAGES_AMOUNT;
  @Input() height = 'auto';
  @Input() width = '100%';

  /*Output events */
  @Output() onRowAdded: EventEmitter<TRow> = new EventEmitter();
  @Output() onRowSaved: EventEmitter<TRow> = new EventEmitter();
  @Output() onRowEdited: EventEmitter<TRow> = new EventEmitter();
  @Output() onRowDeleted: EventEmitter<TRow> = new EventEmitter();
  @Output() onFilterChange: EventEmitter<TCell[]> = new EventEmitter();
  @Output() onSortingChange: EventEmitter<TSorting> = new EventEmitter();
  @Output() onPaginationChange: EventEmitter<TPageParams> = new EventEmitter();

  protected _rawData: WritableSignal<TRow[]> = signal([]);
  protected _tableData: WritableSignal<TRow[]> = signal([]);
  protected _columnControls: Map<string, FormControl<TCell>> = new Map();
  protected _defaultCoulmnSize = 'auto';
  protected _editingRowId: number | null = null;

  protected readonly ADD_COLUMN_KEY = 'add';
  protected readonly COLUMN_TYPES = ColumnTypes;

  constructor(
    private tableService: TableService,
    private notification: NotificationService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this._rawData.set(this.data);
    if (this.paginationEnabled) {
      this.setPagination(0, this.pageSizes[0]);
    } else this.refreshTable();
    this.setColumns();
  }

  setColumns(): void {
    this.columns.sort((a, b) => a.order - b.order);
    this._defaultCoulmnSize = `${100 / this.columns.length}%`;

    if (this.addingEnabled || this.editingEnabled) {
      this.columns.forEach(col => {
        this._columnControls.set(
          col.key,
          new FormControl(null, TableUtils.getValidators(col))
        );
      });
    }
  }

  addRow(): void {
    this._columnControls.forEach(control => control.setValue(null));
    const row = TableUtils.createNewRow(this.columns);

    this._tableData.set([...this._tableData(), row]);

    this.onRowAdded.emit(row);
    this.editRow(row);
  }

  saveRow(row: TRow): void {
    if (!TableUtils.isRowValid(this._columnControls)) {
      this.notification.error(
        this.translationService.translate('table.rowIsInvalid')
      );
      return;
    }

    this._editingRowId = null;

    this._columnControls.forEach((control: FormControl, key) => {
      row[key] = control.value;
    });

    this._rawData.set(structuredClone(this._tableData()));
    this.onRowSaved.emit(row);
    this.tableService.updateFilters$.next(this._rawData());
  }

  cancelRow(): void {
    this._editingRowId = null;
    this.refreshTable();
  }

  editRow(row: TRow): void {
    this._editingRowId = row.id;

    Object.keys(row).forEach(key => {
      const control = this._columnControls.get(key);

      if (control) control.setValue(row[key]);
    });
    this.onRowEdited.emit(row);
  }

  deleteRow(row: TRow): void {
    const index = this._rawData().findIndex(item => item.id === row.id);

    if (index < 0) return;

    this._rawData.set(this._rawData().splice(index, 1));
    this.onRowDeleted.emit(row);
    this.refreshTable();
  }

  onFilterChanged(selectedOptions: TCell[], column: TColumn): void {
    this._tableData.set(
      structuredClone(this._rawData()).filter(row => {
        if (column.type === ColumnTypes.Dropdown) {
          return selectedOptions
            .map(option => (option as TDropdownOption).key)
            .includes(row[column.key].key);
        }
        return selectedOptions.includes(row[column.key]);
      })
    );

    this.onFilterChange.emit(selectedOptions);
  }

  onSortingChanged(sorting: TSorting): void {
    if (sorting.direction === '') {
      this.refreshTable();
      return;
    }
    const column = this.columns.find(col => col.key === sorting.columnKey);
    if (!column) return;

    this._tableData().sort((a, b) => {
      let valueA = a[sorting.columnKey];
      let valueB = b[sorting.columnKey];

      switch (column.type) {
        case ColumnTypes.Dropdown:
          valueA = valueA.value;
          valueB = valueB.value;
          break;
        case ColumnTypes.Date:
          valueA = new Date(valueA).getTime();
          valueB = new Date(valueB).getTime();
          break;
      }

      return (
        (valueA < valueB ? -1 : 1) * (sorting.direction === 'asc' ? 1 : -1)
      );
    });

    this.onSortingChange.emit(sorting);
  }

  paginationChanged(pageParams: TPageParams): void {
    this.setPagination(pageParams.skip, pageParams.take);
    this.onPaginationChange.emit(pageParams);
  }

  setPagination(skip: number, take: number): void {
    const cutArray = this._rawData().slice(skip, skip + take);
    this._tableData.set(structuredClone(cutArray));
  }

  isRowEditing(row: TRow): boolean {
    return row.id === this._editingRowId;
  }

  isRowDisabled(row: TRow): boolean {
    return !!this._editingRowId && !this.isRowEditing(row);
  }

  get isAnyRowEditing(): boolean {
    return !!this._editingRowId;
  }

  getControl(column: TColumn): FormControl {
    return this._columnControls.get(column.key) || new FormControl();
  }

  refreshTable(): void {
    this._tableData.set(structuredClone(this._rawData()));
  }

  get isAnyActionEnabled(): boolean {
    return this.addingEnabled || this.editingEnabled || this.editingEnabled;
  }

  get totalCount(): number {
    return this.data.length;
  }
}

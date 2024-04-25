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
  MuiTableSource,
  PaginationResponse,
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
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'mui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  /*Input params */
  @Input() dataSource: TRow[] | MuiTableSource = [];
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

  private pagination!: TPageParams;
  private sorting!: TSorting;
  protected totalCount: WritableSignal<number> = signal(0);
  protected currentAction!: 'edit' | 'add';

  protected readonly ADD_COLUMN_KEY = 'add';
  protected readonly COLUMN_TYPES = ColumnTypes;

  constructor(
    private tableService: TableService,
    private notification: NotificationService,
    private translationService: TranslationService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    if (this.paginationEnabled) {
      this.pagination = { skip: 0, take: this.pageSizes[0] };
    }
    this.setTableData();
    this.setColumns();
  }

  setTableData(): void {
    if (this.isArray) {
      this._rawData.set(this.dataSource as TRow[]);
      if (this.paginationEnabled) {
        this.setPagination(0, this.pageSizes[0]);
      }
      this.totalCount.set(this._rawData().length);
      this.refreshTable();
    } else if (this.isMuiTableSource) {
      (this.dataSource as MuiTableSource).defineHttpClient(this.http);
      this.loadTableData();
    }
  }

  loadTableData(): void {
    const args: any = { pagination: undefined, sorting: undefined };
    if (this.paginationEnabled && this.pagination)
      args.pagination = this.pagination;
    if (this.sortingEnabled && this.sorting) args.sorting = this.sorting;

    (this.dataSource as MuiTableSource)
      .getAll(args)
      .pipe(
        tap((res: PaginationResponse) => {
          this._rawData.set(res.data);
          this.totalCount.set(res.totalCount);
          this.refreshTable();
        })
      )
      .subscribe();
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
    this.editRow(row, 'add');
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

    if (this.isArray) this._rawData.set(structuredClone(this._tableData()));
    else if (this.isMuiTableSource) {
      if (this.currentAction === 'edit') this.updareRequest(row);
      else if (this.currentAction === 'add') this.addRequest(row);
    }
    this.onRowSaved.emit(row);
    this.tableService.updateFilters$.next(this._rawData());
  }

  updareRequest(row: TRow): void {
    (this.dataSource as MuiTableSource)
      .updateRow(row)
      .pipe(tap(() => this._rawData.set(structuredClone(this._tableData()))))
      .subscribe();
  }

  addRequest(row: TRow): void {
    (this.dataSource as MuiTableSource)
      .addRow(row)
      .pipe(tap(() => this._rawData.set(structuredClone(this._tableData()))))
      .subscribe();
  }

  deleteRequest(id: number, index: number): void {
    (this.dataSource as MuiTableSource)
      .deleteRow(id)
      .pipe(
        tap(() => {
          this.sliceData(index);
          this.refreshTable();
        })
      )
      .subscribe();
  }

  cancelRow(): void {
    this._editingRowId = null;
    this.refreshTable();
  }

  editRow(row: TRow, action: 'edit' | 'add'): void {
    this.currentAction = action;
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

    if (this.isArray) {
      this.sliceData(index);
      this.refreshTable();
    } else if (this.isMuiTableSource) this.deleteRequest(row.id, index);
    this.onRowDeleted.emit(row);
  }

  sliceData(index: number): void {
    this._rawData.set([
      ...this._rawData().slice(0, index),
      ...this._rawData().slice(index + 1),
    ]);
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
    this.sorting = sorting;
    if (this.isArray) {
      this.sort();
    } else if (this.isMuiTableSource) {
      this.loadTableData();
    }

    this.onSortingChange.emit(this.sorting);
  }

  sort(): void {
    if (this.sorting.direction === '') {
      this.refreshTable();
      return;
    }
    const column = this.columns.find(col => col.key === this.sorting.columnKey);
    if (!column) return;

    this._tableData().sort((a, b) => {
      let valueA = a[this.sorting.columnKey];
      let valueB = b[this.sorting.columnKey];

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
        (valueA < valueB ? -1 : 1) * (this.sorting.direction === 'asc' ? 1 : -1)
      );
    });
  }

  paginationChanged(pageParams: TPageParams): void {
    this.pagination = pageParams;
    if (this.isArray) this.setPagination(pageParams.skip, pageParams.take);
    else if (this.isMuiTableSource) this.loadTableData();
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

  get isArray(): boolean {
    return Array.isArray(this.dataSource);
  }

  get isMuiTableSource(): boolean {
    return this.dataSource instanceof MuiTableSource;
  }
}

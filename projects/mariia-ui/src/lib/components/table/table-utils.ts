import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { ColumnTypes, TCell, TColumn, TRow } from './table';

export class TableUtils {
  static createNewRow(columns: TColumn[]): TRow {
    const row: Record<string, TCell> = {};
    columns.forEach(column => {
      row[column.key] = TableUtils.getDefaultColumnValue(column.type);
    });

    return { ...row, id: TableUtils.getUniqueId() };
  }

  static getUniqueId(): number {
    return new Date().getTime();
  }

  static getDefaultColumnValue(columnType: ColumnTypes): TCell {
    switch (columnType) {
      case ColumnTypes.Boolean:
        return false;
      case ColumnTypes.Date:
      case ColumnTypes.Dropdown:
        return null;
      case ColumnTypes.Number:
        return 0;
      case ColumnTypes.String:
        return '';
      default:
        return null;
    }
  }

  static getValidators(column: TColumn): ValidatorFn[] {
    const validators: ValidatorFn[] = [];
    if (column.required) validators.push(Validators.required);
    return validators;
  }

  static isRowValid(controls: Map<string, FormControl<TCell>>): boolean {
    return Array.from(controls.values()).every(control => control.valid);
  }

  static uniqueValues(column: TColumn, data: TRow[]): TCell[] {
    const values =
      column.type === ColumnTypes.Dropdown
        ? data.map(row => row[column.key].key)
        : data.map(row => row[column.key]);

    const uniqueValues = values.filter(
      (val, index, arr) => arr.indexOf(val) === index
    );
    return column.type === ColumnTypes.Dropdown
      ? uniqueValues.map(optionKey => {
          const option = data.find(row => row[column.key]?.key === optionKey)[
            column.key
          ];
          return option || {};
        })
      : uniqueValues;
  }
}

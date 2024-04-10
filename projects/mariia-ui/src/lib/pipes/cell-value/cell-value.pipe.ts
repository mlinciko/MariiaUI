import { Pipe, PipeTransform } from '@angular/core';
import {
  ColumnTypes,
  TCell,
  TColumn,
  TRow,
} from '../../components/table/table';

@Pipe({
  name: 'cellValue',
})
export class CellValuePipe implements PipeTransform {
  transform(value: { row: TRow; column: TColumn }): TCell {
    switch (value.column.type) {
      case ColumnTypes.Boolean:
      case ColumnTypes.Date:
      case ColumnTypes.Number:
      case ColumnTypes.String:
        return value.row[value.column.key];
      case ColumnTypes.Dropdown:
        return value.row[value.column.key].value;
    }
  }
}

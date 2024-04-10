import { Pipe, PipeTransform } from '@angular/core';
import { ColumnTypes, TCell, TColumn } from '../../components/table/table';

@Pipe({
  name: 'checkboxLabel',
})
export class CheckboxLabelPipe implements PipeTransform {
  transform(value: { option: TCell; column: TColumn }): string {
    switch (value.column.type) {
      case ColumnTypes.Dropdown:
        return (value.option as any)?.value.toString();
      case ColumnTypes.Boolean:
        return value.option ? 'Да' : 'Нет';
      case ColumnTypes.Date: {
        const date = new Date(value.option as Date);
        return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
      }
      case ColumnTypes.Number:
        return value.option?.toString() || '0';
      case ColumnTypes.String:
        return value.option?.toString() || '';
    }
  }
}

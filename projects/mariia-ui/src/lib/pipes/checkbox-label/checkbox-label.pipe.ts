import { Pipe, PipeTransform } from '@angular/core';
import { ColumnTypes, TCell, TColumn } from '../../components/table/table';
import { TranslationService } from '../../services/translation/translation.service';

@Pipe({
  name: 'checkboxLabel',
})
export class CheckboxLabelPipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(value: { option: TCell; column: TColumn }): string {
    switch (value.column.type) {
      case ColumnTypes.Dropdown:
        return (value.option as any)?.value.toString();
      case ColumnTypes.Boolean:
        return value.option
          ? this.translationService.translate('table.filtering.trueValue')
          : this.translationService.translate('table.filtering.falseValue');
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

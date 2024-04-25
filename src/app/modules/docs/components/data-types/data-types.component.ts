import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-data-types',
  templateUrl: './data-types.component.html',
  styleUrls: ['./data-types.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTypesComponent {
  constructor(private translationService: TranslationService) {}
  title = this.translationService.translate('docs.dataTypes.title');
  description = this.translationService.translate('docs.dataTypes.description');
  types: { name: string; code: string }[] = [
    {
      name: 'MuiTableSource',
      code: `export class MuiTableSource {
      dataUrl = '';

      constructor(dataUrl: string) {
        this.dataUrl = dataUrl;
      }

      getAll(params: { pagination?: TPageParams; sorting?: TSorting; }): Observable<PaginationResponse> {};
      updateRow(rowData: TRow): Observable<TRow> {};
      addRow(rowData: TRow): Observable<TRow> {};
      deleteRow(id: number): Observable<TRow> {};
    };`,
    },
    {
      name: 'TBarChartSeries',
      code: `type TBarChartSeries = {
        value: number;
        label: string;
      };`,
    },
    {
      name: 'TBarChartMouseEvent',
      code: `type TBarChartMouseEvent = {
        event: Event;
        data: TBarChartSeries;
      };`,
    },
    {
      name: 'TDropdownOption',
      code: `type TDropdownOption = {
        key: string | number;
        value: string;
      };`,
    },
    {
      name: 'TLineChartSeries',
      code: `type TLineChartSeries = {
        value: number;
        label: string;
      };`,
    },
    {
      name: 'TLineChartMouseEvent',
      code: `type TLineChartMouseEvent = {
        event: Event;
        data: TLineChartSeries;
      };`,
    },
    {
      name: 'TNotification',
      code: `type TNotification = {
        message: string;
        duration: number;
        type: NotificationTypeEnum;
      };`,
    },
    {
      name: 'NotificationTypeEnum',
      code: `enum NotificationTypeEnum {
        Default = 0,
        Success = 1,
        Warning = 2,
        Error = 3,
      };`,
    },
    {
      name: 'TPieChartSeries',
      code: `type TPieChartSeries = {
        percent: number;
        label: string;
      };`,
    },
    {
      name: 'TPieChartMouseEvent',
      code: `type TPieChartMouseEvent = {
        event: Event;
        data: PieArcDatum<TPieChartSeries>;
      };`,
    },
    {
      name: 'PieArcDatum',
      code: `interface PieArcDatum<T> {
        data: T;
        value: number;
        index: number;
        startAngle: number;
        endAngle: number;
        padAngle: number;
      };`,
    },
    {
      name: 'TPopupButton',
      code: `type TPopupButton = {
        label: string;
        type: ButtonTypeEnum;
        disabled?: boolean;
        callback: (...params: any[]) => any;
      };`,
    },
    {
      name: 'ButtonTypeEnum',
      code: `enum ButtonTypeEnum {
        Default = 0,
        Success = 1,
        Warning = 2,
        Error = 3,
        Flat = 4,
      };`,
    },
    {
      name: 'TScrollDirection',
      code: `type TScrollDirection = 'vertical' | 'horizontal' | 'both';`,
    },
    {
      name: 'TSpinnerMode',
      code: `type TSpinnerMode = 'line' | 'bubbles';`,
    },
    {
      name: 'TRow',
      code: `type TRow = { id: number } & any;`,
    },
    {
      name: 'TColumn',
      code: `type TColumn = {
        id: number;
        key: string;
        name: string;
        type: ColumnTypes;
        order: number;
        required?: boolean;
        disabled?: boolean;
        size?: string;
        options?: TDropdownOption[];
      };`,
    },
    {
      name: 'ColumnTypes',
      code: `enum ColumnTypes {
        String = 1,
        Boolean = 2,
        Number = 3,
        Dropdown = 4,
        Date = 5,
      };`,
    },
    {
      name: 'TCell',
      code: `type TCell = boolean | string | number | TDropdownOption | Date | null;`,
    },
    {
      name: 'TSorting',
      code: `type TSorting = {
        columnKey: string;
        direction: 'asc' | 'desc' | '';
      };`,
    },
    {
      name: 'TPageParams',
      code: `type TPageParams = {
        skip: number;
        take: number;
      };`,
    },
    {
      name: 'Tab',
      code: `type Tab = {
        id?: string | number | null;
        isActive?: boolean;
        label: string;
      };`,
    },
  ];
}

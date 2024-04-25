import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ColumnTypes,
  MuiTableSource,
  TColumn,
} from 'projects/mariia-ui/src/lib/components/table/table';

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableDemoComponent {
  title = 'Table';
  componentCode = `
  import { Component } from '@angular/core';
  import { ColumnTypes, TColumn } from 'mariia-ui';
  
  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    tableData = [
      { id: 1, name: 'Mariia', age: 22, sex: { key: 1, value: 'F' } },
      { id: 2, name: 'Kristina', age: 22, sex: { key: 1, value: 'F' } },
      { id: 3, name: 'Karina', age: 21, sex: { key: 1, value: 'F' } },
      { id: 4, name: 'Ulyana', age: 21, sex: { key: 1, value: 'F' } },
    ];
    columns: TColumn[] = [
      {
        id: 1,
        key: 'name',
        name: 'Имя',
        type: ColumnTypes.String,
        order: 1,
        required: true,
        disabled: false,
        size: '50%',
      },
      {
        id: 2,
        key: 'age',
        name: 'Возраст',
        type: ColumnTypes.Number,
        order: 2,
        required: true,
        disabled: false,
        size: '25%',
      },
      {
        id: 3,
        key: 'sex',
        name: 'Пол',
        type: ColumnTypes.Dropdown,
        order: 3,
        required: true,
        disabled: false,
        size: '25%',
        options: [
          { key: 1, value: 'F' },
          { key: 2, value: 'M' },
        ],
      },
    ];
  }
  `;
  templateCode = `
  <mui-table
  [data]="tableData"
  [columns]="columns"
  [addingEnabled]="true"
  [editingEnabled]="true"
  [deletingEnabled]="true"
  [filteringEnabled]="true"
  [sortingEnabled]="true"
  [paginationEnabled]="true"></mui-table>`;

  // tableData = [
  //   { id: 1, name: 'Mariia', age: 22, sex: { key: 1, value: 'F' } },
  //   { id: 2, name: 'Kristina', age: 22, sex: { key: 1, value: 'F' } },
  //   { id: 3, name: 'Karina', age: 21, sex: { key: 1, value: 'F' } },
  //   { id: 4, name: 'Ulyana', age: 21, sex: { key: 1, value: 'F' } },
  // ];
  tableData = new MuiTableSource('http://localhost:3000/api/users');
  columns: TColumn[] = [
    {
      id: 1,
      key: 'name',
      name: 'Имя',
      type: ColumnTypes.String,
      order: 1,
      required: true,
      disabled: false,
      size: '50%',
    },
    {
      id: 2,
      key: 'age',
      name: 'Возраст',
      type: ColumnTypes.Number,
      order: 2,
      required: true,
      disabled: false,
      size: '25%',
    },
    {
      id: 3,
      key: 'sex',
      name: 'Пол',
      type: ColumnTypes.Dropdown,
      order: 3,
      required: true,
      disabled: false,
      size: '25%',
      options: [
        { key: 1, value: 'F' },
        { key: 2, value: 'M' },
      ],
    },
  ];
}

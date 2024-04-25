import { Observable } from 'rxjs';
import { TDropdownOption } from '../dropdown/option';
import { HttpClient, HttpParams } from '@angular/common/http';

export enum ColumnTypes {
  String = 1,
  Boolean = 2,
  Number = 3,
  Dropdown = 4,
  Date = 5,
}

export type TColumn = {
  id: number;
  key: string;
  name: string;
  type: ColumnTypes;
  order: number;
  required?: boolean;
  disabled?: boolean;
  size?: string;
  options?: TDropdownOption[];
};

export type TCell = boolean | string | number | TDropdownOption | Date | null;

export type TRow = { id: number } & any;

export type TSorting = {
  columnKey: string;
  direction: 'asc' | 'desc' | '';
};

export const INITIAL_SORTING: TSorting = {
  columnKey: '',
  direction: '',
};

export const DEFAULT_PAGES_AMOUNT: number[] = [10, 25, 50, 100];

export type TPageParams = {
  skip: number;
  take: number;
};

export type PaginationResponse = {
  data: TRow[];
  totalCount: number;
};

export class MuiTableSource {
  dataUrl = '';
  httpClient!: HttpClient;
  constructor(dataUrl: string) {
    this.dataUrl = dataUrl;
    //this.httpClient = httpClient;
  }

  defineHttpClient(httpClient: HttpClient): void {
    this.httpClient = httpClient;
  }

  getAll(params: {
    pagination?: TPageParams;
    sorting?: TSorting;
  }): Observable<PaginationResponse> {
    let httpParams = new HttpParams();
    if (params.pagination) {
      httpParams = httpParams.append('skip', params.pagination.skip);
      httpParams = httpParams.append('take', params.pagination.take);
    }
    if (params.sorting) {
      httpParams = httpParams.append('sortKey', params.sorting.columnKey);
      httpParams = httpParams.append('sortDirection', params.sorting.direction);
    }

    return this.httpClient.get<PaginationResponse>(this.dataUrl, {
      params: httpParams,
    });
  }

  updateRow(rowData: TRow): Observable<TRow> {
    return this.httpClient.patch(this.dataUrl, { ...rowData });
  }

  addRow(rowData: TRow): Observable<TRow> {
    return this.httpClient.post(this.dataUrl, { ...rowData });
  }

  deleteRow(id: number): Observable<TRow> {
    return this.httpClient.delete(this.dataUrl, { body: { id } });
  }
}

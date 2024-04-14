import { TDropdownOption } from '../dropdown/option';

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

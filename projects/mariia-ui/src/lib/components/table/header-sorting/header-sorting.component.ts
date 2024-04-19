/* eslint-disable @angular-eslint/no-output-on-prefix */
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { INITIAL_SORTING, TColumn, TSorting } from '../table';

@Component({
  selector: 'mui-header-sorting',
  templateUrl: './header-sorting.component.html',
  styleUrls: ['./header-sorting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSortingComponent {
  @Input({ required: true }) column!: TColumn;
  @Output() onSortingChange: EventEmitter<TSorting> = new EventEmitter();

  activeSorting: TSorting = INITIAL_SORTING;

  changeSorting(): void {
    if (this.activeSorting.direction === '')
      this.activeSorting.direction = 'asc';
    else if (this.activeSorting.direction === 'asc')
      this.activeSorting.direction = 'desc';
    else if (this.activeSorting.direction === 'desc')
      this.activeSorting.direction = '';

    this.onSortingChange.emit({
      ...this.activeSorting,
      columnKey: this.column.key,
    });
  }

  get isAsc(): boolean {
    return this.activeSorting.direction === 'asc';
  }

  get isDesc(): boolean {
    return this.activeSorting.direction === 'desc';
  }

  get noDirection(): boolean {
    return this.activeSorting.direction === '';
  }
}

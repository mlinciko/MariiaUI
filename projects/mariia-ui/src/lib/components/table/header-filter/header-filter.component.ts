/* eslint-disable @angular-eslint/no-output-on-prefix */
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TCell, TColumn, TRow } from '../table';
import { TableUtils } from '../table-utils';
import { TableService } from '../../../services/table/table.service';
import { tap } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mui-header-filter',
  templateUrl: './header-filter.component.html',
  styleUrls: ['./header-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderFilterComponent implements OnInit {
  @Input({ required: true }) column!: TColumn;
  @Input({ required: true }) data: TRow[] = [];

  @Output() onFilterChange: EventEmitter<TCell[]> = new EventEmitter();

  options: TCell[] = [];
  optionControls: FormControl[] = [];
  isOpened = false;

  constructor(private tableService: TableService) {}

  ngOnInit(): void {
    this.setOptions();

    this.tableService.updateFilters$
      .pipe(tap(data => this.setOptions(data)))
      .subscribe();
  }

  setOptions(data?: TRow[]): void {
    this.options = TableUtils.uniqueValues(
      this.column,
      data ? data : this.data
    );

    this.optionControls = this.options.map(() => new FormControl(true));
  }

  changeFiltersVisibility(isOpened: boolean, e?: Event): void {
    e?.stopPropagation();
    this.isOpened = isOpened;
  }

  @HostListener('document:click', ['$event.target'])
  closeFilters(target: HTMLElement): void {
    if (!this.isOpened) return;

    if (target.closest('.mui__filters') || target.closest('mui-check-icon'))
      return;

    this.changeFiltersVisibility(false);
  }

  changeSelectedOptions(): void {
    const selectedOptions: TCell[] = [];
    this.optionControls.forEach((control, index) => {
      if (control.value) selectedOptions.push(this.options[index]);
    });

    this.onFilterChange.emit(selectedOptions);
  }
}

/* eslint-disable @angular-eslint/no-output-on-prefix */
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TPageParams } from '../table';

@Component({
  selector: 'mui-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnChanges {
  @Input({ required: true }) pageSizes!: number[];
  @Input({ required: true }) totalCount!: number;
  @Output() onPaginationChange: EventEmitter<TPageParams> = new EventEmitter();

  currentPageSize!: number;
  currentPage!: number;
  pages: number[] = [];

  ngOnChanges(): void {
    this.currentPageSize = this.pageSizes[0];
    this.setPages();
  }

  setPageAmount(size: number): void {
    this.currentPageSize = size;
    this.setPages();

    this.paginationChanged();
  }

  setPages(): void {
    const length = Math.floor(this.totalCount / this.currentPageSize);
    this.pages = Array.from({ length: length + 1 }, (_, index) => index + 1);
    this.currentPage = this.pages[0];
  }

  goToPage(index: number): void {
    this.currentPage = index;

    this.paginationChanged();
  }

  paginationChanged(): void {
    this.onPaginationChange.emit({
      skip: (this.currentPage - 1) * this.currentPageSize,
      take: this.currentPageSize,
    });
  }

  get isPrevBtnDisabled(): boolean {
    return this.currentPage === 1;
  }

  get isNextBtnDisabled(): boolean {
    return this.currentPage === this.pages.length;
  }
}

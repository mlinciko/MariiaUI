/* eslint-disable @angular-eslint/no-output-on-prefix */
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TPageParams } from '../table';

@Component({
  selector: 'mui-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit {
  @Input({ required: true }) pageSizes!: number[];
  @Input({ required: true }) totalCount!: number;
  @Output() onPaginationChanged: EventEmitter<TPageParams> = new EventEmitter();

  currentPageSize!: number;
  currentPage!: number;
  pages: number[] = [];

  ngOnInit(): void {
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
    this.onPaginationChanged.emit({
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

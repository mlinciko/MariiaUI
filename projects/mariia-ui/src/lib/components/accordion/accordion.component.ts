/* eslint-disable @angular-eslint/no-output-on-prefix */
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
} from '@angular/core';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'mui-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent implements AfterContentInit, OnDestroy {
  /*Input params */
  @Input() label = '';

  /*Output events */
  @Output() onItemVisibilityChange: EventEmitter<string> = new EventEmitter();
  @ContentChildren(AccordionItemComponent)
  accordionItems!: QueryList<AccordionItemComponent>;
  destroy$: Subject<boolean> = new Subject();

  ngAfterContentInit(): void {
    this.accordionItems.forEach(item => {
      item.onChange
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.changeState(item));
    });
  }

  changeState(clickedItem: AccordionItemComponent): void {
    clickedItem.isExpanded = !clickedItem.isExpanded;
    this.onItemVisibilityChange.emit(clickedItem.label);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

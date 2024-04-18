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
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'mui-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupComponent implements AfterContentInit, OnDestroy {
  /*Input params */
  @Input() label = '';
  @Input() disabled = false;
  @Input() readOnly = false;
  @Input() visible = true;

  /*Output events */
  @Output() onChange: EventEmitter<string | null> = new EventEmitter();

  @ContentChildren(RadioButtonComponent)
  radioButtons!: QueryList<RadioButtonComponent>;
  destroy$: Subject<boolean> = new Subject();

  ngAfterContentInit(): void {
    this.setInitialState();

    this.radioButtons.forEach(item => {
      item.onChange
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.changeState(item));
    });
  }

  setInitialState(): void {
    const checkedItem = this.radioButtons.find(item => item.isChecked);
    this.changeState(checkedItem || this.radioButtons.first);
  }

  changeState(checkedItem: RadioButtonComponent): void {
    this.radioButtons.forEach(item => (item.isChecked = false));
    checkedItem.isChecked = true;

    this.onChange.emit(checkedItem.label);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

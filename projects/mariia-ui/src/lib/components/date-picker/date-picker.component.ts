/* eslint-disable @angular-eslint/no-output-on-prefix */
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
} from '@angular/forms';
import { Subject, debounceTime, tap, takeUntil } from 'rxjs';
import { InputComponent } from '../input/input.component';

const DEFAULT_VALUE = null;

@Component({
  selector: 'mui-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class DatePickerComponent
  implements ControlValueAccessor, OnInit, OnDestroy
{
  /*Input params */
  @Input() label = '';
  @Input() disabled = false;
  @Input() placeholder = '';
  @Input() readOnly = false;
  @Input() showClearButton = true;
  @Input() visible = true;
  @Input() dateMask = 'dd.MM.YYYY';

  /*Output events */
  @Output() onChange: EventEmitter<Date> = new EventEmitter();
  @Output() onClick: EventEmitter<Event> = new EventEmitter();
  @Output() onCalendarVisibilityChanged: EventEmitter<boolean> =
    new EventEmitter();

  /*Form control */
  @Input() formControl: FormControl = new FormControl<Date | null>(null);
  destroy$: Subject<boolean> = new Subject();
  isCalendarOpen = false;

  ngOnInit(): void {
    if (this.disabled) this.formControl.disable();

    if (!this.placeholder && this.dateMask) {
      this.placeholder = this.dateMask.toUpperCase();
    }

    this.formControl.valueChanges
      .pipe(
        debounceTime(200),
        tap(value => this.onControlChange(value)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  clearInput(): void {
    this.formControl.setValue(DEFAULT_VALUE);
    this.formControl.markAsTouched();
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    event.preventDefault();
  }

  @HostListener('document:click', ['$event.target'])
  closeOptions(target: HTMLElement): void {
    if (target.closest('.mui__calendar')) return;
    this.changeCalendarVisibility(false);
  }

  changeCalendarVisibility(isVisible: boolean, e?: Event): void {
    e?.stopPropagation();

    this.isCalendarOpen = isVisible;
    this.onCalendarVisibilityChanged.emit(isVisible);
  }

  dateSelected(date: Date): void {
    this.changeCalendarVisibility(false);
    this.formControl.setValue(date);
  }

  get showClearButtonByState(): boolean {
    return this.showClearButton && this.isEditable;
  }

  get isEditable(): boolean {
    return !this.disabled && !this.readOnly;
  }

  get hasValue(): boolean {
    return !!this.formControl.value;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  /*ControlValueAccessor methods */
  onControlChange: (value: Date) => void = (value: Date) => {
    this.onChange.emit(value);
  };

  onControlTouch: () => void = () => {
    return;
  };

  writeValue(value: string): void {
    //this.formControl.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.onControlChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onControlTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }
}

/* eslint-disable @angular-eslint/no-output-on-prefix */
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subject, debounceTime, takeUntil, tap } from 'rxjs';

const DEFAULT_VALUE = '';

@Component({
  selector: 'mui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor, OnInit, OnDestroy {
  /*Input params */
  @Input() label = '';
  @Input() disabled = false;
  @Input() placeholder = '';
  @Input() readOnly = false;
  @Input() showClearButton = true;
  @Input() visible = true;
  @Input() errorMessages: Record<string, string> = {};

  /*Output events */
  @Output() onInput: EventEmitter<string> = new EventEmitter();
  @Output() onChange: EventEmitter<Event> = new EventEmitter();
  @Output() onFocus: EventEmitter<Event> = new EventEmitter();
  @Output() onBlur: EventEmitter<Event> = new EventEmitter();
  @Output() onKeydown: EventEmitter<Event> = new EventEmitter();
  @Output() onKeyup: EventEmitter<Event> = new EventEmitter();
  @Output() onKeypress: EventEmitter<Event> = new EventEmitter();
  @Output() onMousedown: EventEmitter<Event> = new EventEmitter();
  @Output() onMouseup: EventEmitter<Event> = new EventEmitter();
  @Output() onClick: EventEmitter<Event> = new EventEmitter();

  /*Form control */
  @Input() formControl: FormControl = new FormControl<string>('');
  destroy$: Subject<boolean> = new Subject();

  ngOnInit(): void {
    if (this.disabled) this.formControl.disable();

    this.formControl.valueChanges
      .pipe(
        debounceTime(200),
        tap(value => this.onInput.emit(value)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  clearInput(): void {
    this.formControl.setValue(DEFAULT_VALUE);
    this.formControl.markAsTouched();
  }

  get showClearButtonByState(): boolean {
    return this.showClearButton && this.isEditable;
  }

  get isEditable(): boolean {
    return !this.disabled && !this.readOnly;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  /*ControlValueAccessor methods */
  onControlChange: (value: string) => void = (value: string) => {
    //this.onInput.emit(value);
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

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
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subject, debounceTime, takeUntil, tap } from 'rxjs';
import { TDropdownOption } from './option';

const DEFAULT_VALUE = null;

@Component({
  selector: 'mui-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
})
export class DropdownComponent
  implements ControlValueAccessor, OnInit, OnDestroy
{
  /*Input params */
  @Input() options: TDropdownOption[] = [];
  @Input() label = '';
  @Input() disabled = false;
  @Input() placeholder = '';
  @Input() readOnly = false;
  @Input() showClearButton = false;
  @Input() visible = true;
  @Input() errorMessages: Record<string, string> = {};

  /*Output events */
  @Output() onSelectionChange: EventEmitter<TDropdownOption> =
    new EventEmitter();
  @Output() onOptionsVisibilityChanged: EventEmitter<boolean> =
    new EventEmitter();

  /*Form control */
  @Input() formControl: FormControl = new FormControl<TDropdownOption | null>(
    null
  );
  destroy$: Subject<boolean> = new Subject();
  isOpened = false;

  ngOnInit(): void {
    if (this.disabled) this.formControl.disable();

    this.formControl.valueChanges
      .pipe(
        debounceTime(200),
        tap(value => this.onControlChange(value)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  changeOptionsVisibility(isVisible: boolean, e?: any): void {
    e?.stopPropagation();

    this.isOpened = isVisible;
    this.onOptionsVisibilityChanged.emit(isVisible);
  }

  @HostListener('document:click')
  closeOptions(): void {
    this.changeOptionsVisibility(false);
  }

  optionClicked(option: TDropdownOption): void {
    this.formControl.setValue(option);
  }

  clearInput(): void {
    this.formControl.setValue(DEFAULT_VALUE);
  }

  get hasValue(): boolean {
    return !!this.formControl.value;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  /*ControlValueAccessor methods */
  onControlChange: (value: TDropdownOption) => void = (
    value: TDropdownOption
  ) => {
    this.onSelectionChange.emit(value);
  };

  onControlTouch: () => void = () => {
    return;
  };

  writeValue(value: any): void {
    console.log(value);
    //this.formControl.setValue(value.value, { emitEvent: false });
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

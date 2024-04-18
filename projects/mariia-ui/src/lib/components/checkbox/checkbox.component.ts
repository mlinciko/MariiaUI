/* eslint-disable @angular-eslint/no-output-on-prefix */
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'mui-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor, OnInit {
  /*Input params */
  @Input() label = '';
  @Input() disabled = false;
  @Input() readOnly = false;
  @Input() visible = true;

  /*Output events */
  @Output() onChange: EventEmitter<boolean | null> = new EventEmitter();

  /*Form control */
  @Input() formControl: FormControl = new FormControl<boolean | null>(null);

  ngOnInit(): void {
    if (this.disabled) this.formControl.disable();
  }

  changeState(): void {
    const checked = this.formControl.value;

    this.formControl.setValue(!checked);
    this.formControl.markAsTouched();

    this.onChange.emit(checked);
  }

  get checked(): boolean {
    return this.formControl.value;
  }

  /*ControlValueAccessor methods */
  onControlChange = (value: boolean | null): void => {
    return;
  };

  onControlTouch: () => void = () => {
    return;
  };

  writeValue(value: boolean | null): void {
    //this.formControl.setValue(value, { emitEvent: false });
    return;
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

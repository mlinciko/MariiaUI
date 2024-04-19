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
import { Subject } from 'rxjs';
import { ButtonTypeEnum } from '../button/button';
import { TranslationService } from '../../services/translation/translation.service';

@Component({
  selector: 'mui-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilePickerComponent),
      multi: true,
    },
  ],
})
export class FilePickerComponent
  implements ControlValueAccessor, OnInit, OnDestroy
{
  /*Input params */
  @Input() label = '';
  @Input() buttonLabel = '';
  @Input() allowedTypes: string[] = [];
  @Input() showClearButton = true;
  @Input() disabled = false;
  @Input() placeholder = '';
  @Input() readOnly = false;
  @Input() visible = true;

  /*Output events */
  @Output() onFileSelected: EventEmitter<File | null> = new EventEmitter();
  @Output() onFileDeleted: EventEmitter<File | null> = new EventEmitter();

  /*Form control */
  @Input() formControl: FormControl = new FormControl<File | null>(null);
  destroy$: Subject<boolean> = new Subject();

  fileControl: FormControl<string | null> = new FormControl('');

  readonly DEFAULT_BUTTON_LABEL = this.translationService.translate(
    'filePicker.buttonLabel'
  );
  readonly BUTTON_TYPE = ButtonTypeEnum.Flat;

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    if (this.disabled) this.formControl.disable();

    this.fileControl.setValidators(this.formControl.validator);
  }

  onFileChanged(e: any): void {
    const fileList: FileList = e.target.files;

    const value = fileList.item(0) || null;
    this.formControl.setValue(value);

    this.formControl.markAsTouched();
    this.fileControl.markAsTouched();

    this.onFileSelected.emit(value);
  }

  deleteFile(): void {
    const value = this.formControl.value;

    this.formControl.setValue(null);
    this.fileControl.setValue(null);

    this.onFileSelected.emit(value);
  }

  get fileName(): string {
    return this.formControl.value.name;
  }

  get hasValue(): boolean {
    return !!this.formControl.value;
  }

  get accept(): string {
    if (this.allowedTypes.length)
      return this.allowedTypes.map(type => `.${type}`).join(',');
    return '*';
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
  onControlChange: (value: any) => void = (value: any) => {
    return;
  };

  onControlTouch: () => void = () => {
    return;
  };

  writeValue(value: any): void {
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

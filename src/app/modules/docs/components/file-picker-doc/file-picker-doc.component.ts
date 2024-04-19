import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { FILE_PICKER_TITLE, FILE_PICKER_CODE } from './file-picker';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-file-picker-doc',
  templateUrl: './file-picker-doc.component.html',
  styleUrls: ['./file-picker-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilePickerDocComponent {
  constructor(private translationService: TranslationService) {}
  title = FILE_PICKER_TITLE;
  description = this.translationService.translate(
    'docs.filePicker.description'
  );
  code = FILE_PICKER_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.filePicker.label'),
    },
    {
      name: 'buttonLabel',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.filePicker.buttonLabel'),
    },
    {
      name: 'allowedTypes',
      type: 'string[]',
      defaultValue: '[]',
      descr: this.translationService.translate('docs.filePicker.allowedTypes'),
    },
    {
      name: 'showClearButton',
      type: 'boolean',
      defaultValue: 'true',
      descr: this.translationService.translate(
        'docs.filePicker.showClearButton'
      ),
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.filePicker.disabled'),
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.filePicker.placeholder'),
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.filePicker.readOnly'),
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr: this.translationService.translate('docs.filePicker.visible'),
    },
    {
      name: 'formControl',
      type: '<a href="https://angular.io/api/forms/FormControl">FormControl&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/API/File">File</a> | null&gt;</a>',
      defaultValue: 'FormControl<File | null>(null)',
      descr: this.translationService.translate('docs.filePicker.formControl'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onFileSelected',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/File">File</a> | null',
      descr: this.translationService.translate(
        'docs.filePicker.onFileSelected'
      ),
    },
    {
      name: 'onFileDeleted',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/File">File</a> | null',
      descr: this.translationService.translate('docs.filePicker.onFileDeleted'),
    },
  ];
}

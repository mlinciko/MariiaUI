import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import {
  FILE_PICKER_TITLE,
  FILE_PICKER_DESCRIPTION,
  FILE_PICKER_CODE,
} from './file-picker';

@Component({
  selector: 'app-file-picker-doc',
  templateUrl: './file-picker-doc.component.html',
  styleUrls: ['./file-picker-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilePickerDocComponent {
  title = FILE_PICKER_TITLE;
  description = FILE_PICKER_DESCRIPTION;
  code = FILE_PICKER_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set a title for the file-picker component',
    },
    {
      name: 'buttonLabel',
      type: 'string',
      defaultValue: "' '",
      descr:
        'Property allows to set a title for button of the file-picker component',
    },
    {
      name: 'allowedTypes',
      type: 'string[]',
      defaultValue: '[]',
      descr:
        'Property allows to set allowed file types for the file-picker component',
    },
    {
      name: 'showClearButton',
      type: 'boolean',
      defaultValue: 'true',
      descr:
        'Property allows to enable clear button for the file-picker component',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      descr:
        'Property allows to set disabled state for the file-picker component',
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set placeholder for the file-picker component',
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
      descr:
        'Property allows to set readOnly state for the file-picker component',
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'true',
      descr:
        'Property allows to set visiblity state for the file-picker component',
    },
    {
      name: 'formControl',
      type: '<a href="https://angular.io/api/forms/FormControl">FormControl&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/API/File">File</a> | null&gt;</a>',
      defaultValue: 'FormControl<File | null>(null)',
      descr:
        'Property allows to set native angular form control to file-picker component',
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onFileSelected',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/File">File</a> | null',
      descr:
        'Property emits an event when the file-picker component gets new value',
    },
    {
      name: 'onFileDeleted',
      returnType:
        '<a href="https://developer.mozilla.org/en-US/docs/Web/API/File">File</a> | null',
      descr:
        'Property emits an event when the file is deleted from the file-picker component',
    },
  ];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-file-picker-demo',
  templateUrl: './file-picker-demo.component.html',
  styleUrls: ['./file-picker-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilePickerDemoComponent {
  title = 'FilePicker';
  componentCode = `
  import { Component } from '@angular/core';
  import { FormControl } from '@angular/forms';
  
  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    label = '';
    buttonLabel = '';
    allowedTypes = ['doc', 'png'];
    placeholder = 'Select file';
    fileControl: FormControl<File | null> = new FormControl(
      new File([], 'File.doc')
    );
  }`;
  templateCode = `<mui-file-picker
  [label]="label"
  [buttonLabel]="buttonLabel"
  [allowedTypes]="allowedTypes"
  [showClearButton]="true"
  [placeholder]="placeholder"
  [disabled]="false"
  [readOnly]="false"
  [formControl]="fileControl"></mui-file-picker>`;

  label = '';
  buttonLabel = '';
  allowedTypes = ['doc', 'png'];
  placeholder = 'Select file';
  fileControl: FormControl<File | null> = new FormControl(
    new File([], 'File.doc')
  );
}

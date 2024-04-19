import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-textarea-demo',
  templateUrl: './textarea-demo.component.html',
  styleUrls: ['./textarea-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaDemoComponent {
  title = 'Textarea';
  componentCode = `
  import { Component } from '@angular/core';
  import { FormControl } from '@angular/forms';
  
  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    label = 'Description';
    placeholder = 'Enter description';
    maxLength = 1000;
    texareaControl: FormControl<string | null> = new FormControl('Text');
  }
  `;
  templateCode = `<mui-textarea
  [label]="label"
  [showClearButton]="true"
  [placeholder]="placeholder"
  [maxLength]="maxLength"
  [showCounter]="true"
  [disabled]="false"
  [readOnly]="false"
  [formControl]="texareaControl"></mui-textarea>`;

  label = 'Description';
  placeholder = 'Enter description';
  maxLength = 1000;
  texareaControl: FormControl<string | null> = new FormControl('Text');
  texareaDisabledControl: FormControl<string | null> = new FormControl('Text');
  texareaReadOnlyControl: FormControl<string | null> = new FormControl('Text');
}

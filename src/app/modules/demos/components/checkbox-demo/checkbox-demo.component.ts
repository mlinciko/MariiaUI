import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox-demo',
  templateUrl: './checkbox-demo.component.html',
  styleUrls: ['./checkbox-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxDemoComponent {
  title = 'Checkbox';
  componentCode = `
  import { Component } from '@angular/core';
  import { FormControl } from '@angular/forms';
  
  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    label = 'Confirm action';
    checkboxControl: FormControl<boolean | null> = new FormControl(true);
  }`;
  templateCode = `<mui-checkbox
  [label]="label"
  [disabled]="false"
  [readOnly]="false"
  [formControl]="checkboxControl"></mui-checkbox>`;

  label = 'Confirm action';
  checkboxControl: FormControl<boolean | null> = new FormControl(true);
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDemoComponent {
  title = 'Input';
  componentCode = `
  import { Component } from '@angular/core';
  import { FormControl } from '@angular/forms';
  
  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    label = 'First Name';
    placeholder = 'Enter your name';
    inputControl: FormControl<string | null> = new FormControl(null, [
      Validators.required,
    ]);
  
    onInput(value: string): void {
      return;
    }
  }`;
  templateCode = `<mui-input
  [label]="label"
  [showClearButton]="true"
  [placeholder]="placeholder"
  [disabled]="false"
  [readOnly]="false"
  [formControl]="inputControl"
  (onInput)="onInput($event)"></mui-input>`;

  label = 'First Name';
  placeholder = 'Enter your name';
  inputControl: FormControl<string | null> = new FormControl(null, [
    Validators.required,
  ]);
  inputDisabledControl: FormControl<string | null> = new FormControl('Mariia');
  inputReadOnlyControl: FormControl<string | null> = new FormControl('Mariia');

  onInput(value: string): void {
    return;
  }
}

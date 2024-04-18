import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-numberbox-demo',
  templateUrl: './numberbox-demo.component.html',
  styleUrls: ['./numberbox-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberboxDemoComponent {
  title = 'Numberbox';
  componentCode = `
  import { Component } from '@angular/core';
  import { FormControl } from '@angular/forms';
  
  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    label = 'Amount';
    placeholder = 'Enter amount';
    numberBoxControl: FormControl<number | null> = new FormControl(100, [
      Validators.required,
    ]);
  
    onInput(value: number): void {
      return;
    }
  }
  `;
  templateCode = `<mui-numberbox
  [label]="label"
  [placeholder]="placeholder"
  [showClearButton]="true"
  [disabled]="false"
  [readOnly]="false"
  [formControl]="numberBoxControl"></mui-numberbox>`;

  label = 'Amount';
  placeholder = 'Enter amount';
  numberBoxControl: FormControl<number | null> = new FormControl(100, [
    Validators.required,
  ]);
  numberBoxDisabledControl: FormControl<number | null> = new FormControl(100);
  numberBoxReadOnlyControl: FormControl<number | null> = new FormControl(100);

  onInput(value: number): void {
    return;
  }
}

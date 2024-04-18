import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TDropdownOption } from 'projects/mariia-ui/src/lib/components/dropdown/option';

@Component({
  selector: 'app-lookup-demo',
  templateUrl: './lookup-demo.component.html',
  styleUrls: ['./lookup-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LookupDemoComponent {
  title = 'Lookup';
  componentCode = `
  import { Component } from '@angular/core';
  import { FormControl } from '@angular/forms';
  import { TDropdownOption } from 'mariia-ui/';
  
  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    label = 'Timezone';
    placeholder = 'Select value';
    options: TDropdownOption[] = [
      {
        key: 1,
        value: 'UTC-12:00 International Date Line West',
      },
      {
        key: 2,
        value: 'UTC-11:00 Coordinated Universal Time-11',
      },
      {
        key: 3,
        value: 'UTC-10:00 Hawaii',
      },
    ];
    lookupControl: FormControl<TDropdownOption | null> = new FormControl(
      this.options[0]
    );
  
    onLookupSelectionChange(value: TDropdownOption): void {
      return;
    }
  }
  `;
  templateCode = `<mui-lookup
  [options]="options"
  [label]="label"
  [showClearButton]="true"
  [placeholder]="placeholder"
  [disabled]="false"
  [readOnly]="false"
  [formControl]="lookupControl"
  (onSelectionChange)="onLookupSelectionChange($event)"></mui-lookup>`;

  label = 'Timezone';
  placeholder = 'Select value';
  options: TDropdownOption[] = [
    {
      key: 1,
      value: 'UTC-12:00 International Date Line West',
    },
    {
      key: 2,
      value: 'UTC-11:00 Coordinated Universal Time-11',
    },
    {
      key: 3,
      value: 'UTC-10:00 Hawaii',
    },
  ];
  lookupControl: FormControl<TDropdownOption | null> = new FormControl(
    this.options[0]
  );

  onLookupSelectionChange(value: TDropdownOption): void {
    return;
  }
}

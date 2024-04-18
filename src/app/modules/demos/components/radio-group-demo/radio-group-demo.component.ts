import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-radio-group-demo',
  templateUrl: './radio-group-demo.component.html',
  styleUrls: ['./radio-group-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupDemoComponent {
  titlePage = 'RadioGroup';
  componentCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    label = 'Size';
    radionButtons: { label: string; isChecked: boolean }[] = [
      {
        label: 'Small',
        isChecked: true,
      },
      {
        label: 'Medium',
        isChecked: false,
      },
      {
        label: 'Large',
        isChecked: false,
      },
    ];
  }
  `;
  templateCode = `<mui-radio-group [label]="label" [disabled]="false" [readOnly]="false">
  <mui-radio-button
      *ngFor="let radionButton of radionButtons"
      [label]="radionButton.label"
      [isChecked]="radionButton.isChecked"></mui-radio-button>
</mui-radio-group>`;

  label = 'Size';
  radionButtons: { label: string; isChecked: boolean }[] = [
    {
      label: 'Small',
      isChecked: true,
    },
    {
      label: 'Medium',
      isChecked: false,
    },
    {
      label: 'Large',
      isChecked: false,
    },
  ];
}

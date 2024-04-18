import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-slide-toggle-demo',
  templateUrl: './slide-toggle-demo.component.html',
  styleUrls: ['./slide-toggle-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideToggleDemoComponent {
  title = 'SlideToggle';
  componentCode = `
  import { Component } from '@angular/core';
  import { FormControl } from '@angular/forms';
  
  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    label = 'Have Middle Name';
    slideToggleControl: FormControl<boolean | null> = new FormControl(true);
  }
  `;
  templateCode = `<mui-slide-toggle
  [label]="label"
  [disabled]="true"
  [readOnly]="true"
  [formControl]="slideToggleControl"></mui-slide-toggle>`;

  label = 'Have Middle Name';
  slideToggleControl: FormControl<boolean | null> = new FormControl(true);
}

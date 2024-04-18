import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-spinner-demo',
  templateUrl: './spinner-demo.component.html',
  styleUrls: ['./spinner-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerDemoComponent {
  title = 'Spinner';
  componentCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    visible = true;
  }
  `;
  templateCode = `<mui-spinner [visible]="true" [mode]="'bubbles'"></mui-spinner>`;

  visible = true;
}

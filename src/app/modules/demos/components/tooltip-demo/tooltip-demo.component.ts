import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-demo',
  templateUrl: './tooltip-demo.component.html',
  styleUrls: ['./tooltip-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipDemoComponent {
  title = 'Tooltip';
  componentCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    tooltipText = 'Tooltip Text';
  }
  `;
  templateCode = `<div [muiTooltip]="tooltipText">This text has tooltip</div>`;

  tooltipText = 'Tooltip Text';
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TLineChartSeries } from 'projects/mariia-ui/src/lib/components/line-chart/line-chart';

@Component({
  selector: 'app-line-chart-demo',
  templateUrl: './line-chart-demo.component.html',
  styleUrls: ['./line-chart-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChartDemoComponent {
  title = 'LineChart';
  componentCode = `
  import { Component } from '@angular/core';
  import { TLineChartSeries } from 'mariia-ui';
  
  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    label = 'Line chart label';
    lineChartSiries: TLineChartSeries[][] = [
      [
        { value: 8, label: 'January' },
        { value: 17, label: 'February' },
        { value: 32, label: 'March' },
        { value: 9, label: 'April' },
        { value: 56, label: 'May' },
      ],
      [
        { value: 15, label: 'January' },
        { value: 26, label: 'February' },
        { value: 90, label: 'March' },
        { value: 13, label: 'April' },
        { value: 26, label: 'May' },
      ],
      [
        { value: 29, label: 'January' },
        { value: 80, label: 'February' },
        { value: 17, label: 'March' },
        { value: 45, label: 'April' },
        { value: 78, label: 'May' },
      ],
    ];
  }`;
  templateCode = `
  <mui-line-chart
  [label]="label"
  [showGrid]="true"
  [series]="lineChartSiries"></mui-line-chart>`;

  label = 'Line chart label';
  lineChartSiries: TLineChartSeries[][] = [
    [
      { value: 8, label: 'January' },
      { value: 17, label: 'February' },
      { value: 32, label: 'March' },
      { value: 9, label: 'April' },
      { value: 56, label: 'May' },
    ],
    [
      { value: 15, label: 'January' },
      { value: 26, label: 'February' },
      { value: 90, label: 'March' },
      { value: 13, label: 'April' },
      { value: 26, label: 'May' },
    ],
    [
      { value: 29, label: 'January' },
      { value: 80, label: 'February' },
      { value: 17, label: 'March' },
      { value: 45, label: 'April' },
      { value: 78, label: 'May' },
    ],
  ];
}

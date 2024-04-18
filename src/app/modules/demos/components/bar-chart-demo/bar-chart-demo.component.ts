import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TBarChartSeries } from 'projects/mariia-ui/src/lib/components/bar-chart/bar-chart';

@Component({
  selector: 'app-bar-chart-demo',
  templateUrl: './bar-chart-demo.component.html',
  styleUrls: ['./bar-chart-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarChartDemoComponent {
  title = 'BarChart';
  componentCode = `
  import { Component } from '@angular/core';
  import { TBarChartSeries } from 'mariia-ui';
  
  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    label = 'Bar chart label';
    barChartSiries: TBarChartSeries[] = [
      { value: 150, label: 'January' },
      { value: 200, label: 'February' },
      { value: 180, label: 'March' },
      { value: 220, label: 'April' },
      { value: 250, label: 'May' },
      { value: 270, label: 'June' },
      { value: 300, label: 'July' },
      { value: 280, label: 'August' },
      { value: 240, label: 'September' },
      { value: 320, label: 'October' },
      { value: 310, label: 'November' },
      { value: 330, label: 'December' },
    ];
  }
  `;
  templateCode = `<mui-bar-chart
  [label]="label"
  [series]="barChartSiries"
  [showGrid]="true"></mui-bar-chart>`;

  label = 'Bar chart label';
  barChartSiries: TBarChartSeries[] = [
    { value: 150, label: 'January' },
    { value: 200, label: 'February' },
    { value: 180, label: 'March' },
    { value: 220, label: 'April' },
    { value: 250, label: 'May' },
    { value: 270, label: 'June' },
    { value: 300, label: 'July' },
    { value: 280, label: 'August' },
    { value: 240, label: 'September' },
    { value: 320, label: 'October' },
    { value: 310, label: 'November' },
    { value: 330, label: 'December' },
  ];
}

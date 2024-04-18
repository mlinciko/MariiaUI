import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TPieChartSeries } from 'projects/mariia-ui/src/lib/components/pie-chart/pie-chart';

@Component({
  selector: 'app-pie-chart-demo',
  templateUrl: './pie-chart-demo.component.html',
  styleUrls: ['./pie-chart-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartDemoComponent {
  title = 'PieChart';
  componentCode = `
  import { Component } from '@angular/core';
  import { TPieChartSeries } from 'mariia-ui';
  
  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    label = 'Pie chart label';
    pieChartSiries: TPieChartSeries[] = [
      { percent: 10, label: 'January' },
      { percent: 20, label: 'February' },
      { percent: 30, label: 'March' },
      { percent: 40, label: 'April' },
      { percent: 50, label: 'May' },
    ];
  }
  `;
  templateCode = `<mui-pie-chart [label]="label" [series]="pieChartSiries"></mui-pie-chart>`;

  label = 'Pie chart label';
  pieChartSiries: TPieChartSeries[] = [
    { percent: 10, label: 'January' },
    { percent: 20, label: 'February' },
    { percent: 30, label: 'March' },
    { percent: 40, label: 'April' },
    { percent: 50, label: 'May' },
  ];
}

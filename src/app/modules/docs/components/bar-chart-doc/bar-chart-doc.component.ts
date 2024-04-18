import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import {
  BAR_CHART_TITLE,
  BAR_CHART_DESCRIPTION,
  BAR_CHART_CODE,
} from './bar-chart';

@Component({
  selector: 'app-bar-chart-doc',
  templateUrl: './bar-chart-doc.component.html',
  styleUrls: ['./bar-chart-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarChartDocComponent {
  title = BAR_CHART_TITLE;
  description = BAR_CHART_DESCRIPTION;
  code = BAR_CHART_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set a label for the chart',
    },
    {
      name: 'barColor',
      type: 'string',
      defaultValue: '#F05454',
      descr: 'Property allows to set a color of the bars for the chart',
    },
    {
      name: 'series',
      type: `<a href="/docs/data-types">TBarChartSeries</a>[]`,
      defaultValue: '[]',
      descr: 'Property allows to set data for the chart',
    },
    {
      name: 'showGrid',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to enable grid for the chart',
    },
    {
      name: 'width',
      type: 'number',
      defaultValue: '800',
      descr: 'Property allows to set width of the chart',
    },
    {
      name: 'height',
      type: 'number',
      defaultValue: '400',
      descr: 'Property allows to set height of the chart',
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onBarMouseover',
      returnType: `<a href="/docs/data-types">TBarChartMouseEvent</a>`,
      descr:
        'Property emits a new value when the mouse hovers over a chart column',
    },
    {
      name: 'onBarMouseout',
      returnType: `<a href="/docs/data-types">TBarChartMouseEvent</a>`,
      descr:
        'Property emits a new value when the mouse cursor moves away from a chart column',
    },
  ];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import {
  LINE_CHART_TITLE,
  LINE_CHART_DESCRIPTION,
  LINE_CHART_CODE,
} from './line-chart';

@Component({
  selector: 'app-line-chart-doc',
  templateUrl: './line-chart-doc.component.html',
  styleUrls: ['./line-chart-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChartDocComponent {
  title = LINE_CHART_TITLE;
  description = LINE_CHART_DESCRIPTION;
  code = LINE_CHART_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set a label for the chart',
    },
    {
      name: 'colors',
      type: 'string[]',
      defaultValue: '[]',
      descr: 'Property allows to set a colors of the lines of the chart',
    },
    {
      name: 'series',
      type: `<a href="/docs/data-types">TLineChartSeries</a>[][]`,
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
      name: 'onPointMouseover',
      returnType: `<a href="/docs/data-types">TLineChartMouseEvent</a>`,
      descr:
        'Property emits a new value when the mouse hovers over a chart point',
    },
    {
      name: 'onPointMouseout',
      returnType: `<a href="/docs/data-types">TLineChartMouseEvent</a>`,
      descr:
        'Property emits a new value when the mouse cursor moves away from a chart point',
    },
  ];
}

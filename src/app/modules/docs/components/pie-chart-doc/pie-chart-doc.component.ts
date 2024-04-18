import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import {
  PIE_CHART_TITLE,
  PIE_CHART_DESCRIPTION,
  PIE_CHART_CODE,
} from './pie-chart';

@Component({
  selector: 'app-pie-chart-doc',
  templateUrl: './pie-chart-doc.component.html',
  styleUrls: ['./pie-chart-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartDocComponent {
  title = PIE_CHART_TITLE;
  description = PIE_CHART_DESCRIPTION;
  code = PIE_CHART_CODE;

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
      descr: 'Property allows to set a colors of the sectors of the chart',
    },
    {
      name: 'series',
      type: `<a href="/docs/data-types">TPieChartSeries</a>[]`,
      defaultValue: '[]',
      descr: 'Property allows to set data for the chart',
    },
    {
      name: 'width',
      type: 'number',
      defaultValue: '400',
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
      name: 'onSectorMouseover',
      returnType: `<a href="/docs/data-types">TPieChartMouseEvent</a>`,
      descr:
        'Property emits a new value when the mouse hovers over a chart sector',
    },
    {
      name: 'onSectorMouseout',
      returnType: `<a href="/docs/data-types">TPieChartMouseEvent</a>`,
      descr:
        'Property emits a new value when the mouse cursor moves away from a chart sector',
    },
  ];
}

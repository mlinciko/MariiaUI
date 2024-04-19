import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { BAR_CHART_TITLE, BAR_CHART_CODE } from './bar-chart';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-bar-chart-doc',
  templateUrl: './bar-chart-doc.component.html',
  styleUrls: ['./bar-chart-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarChartDocComponent {
  constructor(private translationService: TranslationService) {}
  title = BAR_CHART_TITLE;
  description = this.translationService.translate('docs.barChart.description');
  code = BAR_CHART_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.barChart.label'),
    },
    {
      name: 'barColor',
      type: 'string',
      defaultValue: '#F05454',
      descr: this.translationService.translate('docs.barChart.barColor'),
    },
    {
      name: 'series',
      type: `<a href="/docs/data-types">TBarChartSeries</a>[]`,
      defaultValue: '[]',
      descr: this.translationService.translate('docs.barChart.series'),
    },
    {
      name: 'showGrid',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.barChart.showGrid'),
    },
    {
      name: 'width',
      type: 'number',
      defaultValue: '800',
      descr: this.translationService.translate('docs.barChart.width'),
    },
    {
      name: 'height',
      type: 'number',
      defaultValue: '400',
      descr: this.translationService.translate('docs.barChart.height'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onBarMouseover',
      returnType: `<a href="/docs/data-types">TBarChartMouseEvent</a>`,
      descr: this.translationService.translate('docs.barChart.onBarMouseover'),
    },
    {
      name: 'onBarMouseout',
      returnType: `<a href="/docs/data-types">TBarChartMouseEvent</a>`,
      descr: this.translationService.translate('docs.barChart.onBarMouseout'),
    },
  ];
}

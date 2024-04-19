import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { LINE_CHART_TITLE, LINE_CHART_CODE } from './line-chart';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-line-chart-doc',
  templateUrl: './line-chart-doc.component.html',
  styleUrls: ['./line-chart-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChartDocComponent {
  constructor(private translationService: TranslationService) {}
  title = LINE_CHART_TITLE;
  description = this.translationService.translate('docs.lineChart.description');
  code = LINE_CHART_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.lineChart.label'),
    },
    {
      name: 'colors',
      type: 'string[]',
      defaultValue: '[]',
      descr: this.translationService.translate('docs.lineChart.colors'),
    },
    {
      name: 'series',
      type: `<a href="/docs/data-types">TLineChartSeries</a>[][]`,
      defaultValue: '[]',
      descr: this.translationService.translate('docs.lineChart.series'),
    },
    {
      name: 'showGrid',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.lineChart.showGrid'),
    },
    {
      name: 'width',
      type: 'number',
      defaultValue: '800',
      descr: this.translationService.translate('docs.lineChart.width'),
    },
    {
      name: 'height',
      type: 'number',
      defaultValue: '400',
      descr: this.translationService.translate('docs.lineChart.height'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onPointMouseover',
      returnType: `<a href="/docs/data-types">TLineChartMouseEvent</a>`,
      descr: this.translationService.translate(
        'docs.lineChart.onPointMouseover'
      ),
    },
    {
      name: 'onPointMouseout',
      returnType: `<a href="/docs/data-types">TLineChartMouseEvent</a>`,
      descr: this.translationService.translate(
        'docs.lineChart.onPointMouseout'
      ),
    },
  ];
}

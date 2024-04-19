import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { PIE_CHART_TITLE, PIE_CHART_CODE } from './pie-chart';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-pie-chart-doc',
  templateUrl: './pie-chart-doc.component.html',
  styleUrls: ['./pie-chart-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartDocComponent {
  constructor(private translationService: TranslationService) {}
  title = PIE_CHART_TITLE;
  description = this.translationService.translate('docs.pieChart.description');
  code = PIE_CHART_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.pieChart.label'),
    },
    {
      name: 'colors',
      type: 'string[]',
      defaultValue: '[]',
      descr: this.translationService.translate('docs.pieChart.colors'),
    },
    {
      name: 'series',
      type: `<a href="/docs/data-types">TPieChartSeries</a>[]`,
      defaultValue: '[]',
      descr: this.translationService.translate('docs.pieChart.series'),
    },
    {
      name: 'width',
      type: 'number',
      defaultValue: '400',
      descr: this.translationService.translate('docs.pieChart.width'),
    },
    {
      name: 'height',
      type: 'number',
      defaultValue: '400',
      descr: this.translationService.translate('docs.pieChart.height'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onSectorMouseover',
      returnType: `<a href="/docs/data-types">TPieChartMouseEvent</a>`,
      descr: this.translationService.translate(
        'docs.pieChart.onSectorMouseover'
      ),
    },
    {
      name: 'onSectorMouseout',
      returnType: `<a href="/docs/data-types">TPieChartMouseEvent</a>`,
      descr: this.translationService.translate(
        'docs.pieChart.onSectorMouseout'
      ),
    },
  ];
}

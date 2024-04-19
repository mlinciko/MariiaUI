import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { TOOLTIP_TITLE, TOOLTIP_CODE } from './tooltip';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-tooltip-doc',
  templateUrl: './tooltip-doc.component.html',
  styleUrls: ['./tooltip-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipDocComponent {
  constructor(private translationService: TranslationService) {}
  title = TOOLTIP_TITLE;
  description = this.translationService.translate('docs.tooltip.description');
  code = TOOLTIP_CODE;

  inputs: TInput[] = [
    {
      name: 'tooltipText',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.tooltip.tooltipText'),
    },
  ];

  outputs: TOutput[] = [];
}

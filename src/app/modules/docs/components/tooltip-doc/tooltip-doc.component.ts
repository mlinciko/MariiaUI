import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { TOOLTIP_TITLE, TOOLTIP_DESCRIPTION, TOOLTIP_CODE } from './tooltip';

@Component({
  selector: 'app-tooltip-doc',
  templateUrl: './tooltip-doc.component.html',
  styleUrls: ['./tooltip-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipDocComponent {
  title = TOOLTIP_TITLE;
  description = TOOLTIP_DESCRIPTION;
  code = TOOLTIP_CODE;

  inputs: TInput[] = [
    {
      name: 'tooltipText',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set a tooltip text for the tooltip component',
    },
  ];

  outputs: TOutput[] = [];
}

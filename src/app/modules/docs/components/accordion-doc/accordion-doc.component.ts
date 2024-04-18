import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ACCORDION_CODE,
  ACCORDION_DESCRIPTION,
  ACCORDION_TITLE,
} from './accordion';
import { TInput, TOutput } from '../../models/doc-data';

@Component({
  selector: 'app-accordion-doc',
  templateUrl: './accordion-doc.component.html',
  styleUrls: ['./accordion-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionDocComponent {
  title = ACCORDION_TITLE;
  description = ACCORDION_DESCRIPTION;
  code = ACCORDION_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set a title for the entire component',
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onItemVisibilityChange',
      returnType: 'string',
      descr:
        'Property emits an event when a component element changes its visibility. Returns the label of the element that changed visibility',
    },
  ];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ACCORDION_ITEM_CODE,
  ACCORDION_ITEM_DESCRIPTION,
  ACCORDION_TITLE,
} from './accordion-item';
import { TInput, TOutput } from '../../models/doc-data';

@Component({
  selector: 'app-accordion-item-doc',
  templateUrl: './accordion-item-doc.component.html',
  styleUrls: ['./accordion-item-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItemDocComponent {
  title = ACCORDION_TITLE;
  description = ACCORDION_ITEM_DESCRIPTION;
  code = ACCORDION_ITEM_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr:
        'Property allows to set a label for one element of the Accordion component',
    },
    {
      name: 'isExpanded',
      type: 'boolean',
      defaultValue: 'false',
      descr:
        'Property allows to specify whether an element is expanded by default or not',
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onChange',
      returnType: 'void',
      descr: "Property emits an event when the element's title is clicked",
    },
  ];
}

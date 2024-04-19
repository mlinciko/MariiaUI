import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ACCORDION_ITEM_CODE, ACCORDION_TITLE } from './accordion-item';
import { TInput, TOutput } from '../../models/doc-data';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-accordion-item-doc',
  templateUrl: './accordion-item-doc.component.html',
  styleUrls: ['./accordion-item-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItemDocComponent {
  constructor(private translationService: TranslationService) {}
  title = ACCORDION_TITLE;
  description = this.translationService.translate(
    'docs.accordionItem.description'
  );
  code = ACCORDION_ITEM_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.accordionItem.label'),
    },
    {
      name: 'isExpanded',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.accordionItem.isExpanded'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onChange',
      returnType: 'void',
      descr: this.translationService.translate('docs.accordionItem.onChange'),
    },
  ];
}

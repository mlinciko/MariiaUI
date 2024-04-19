import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ACCORDION_CODE, ACCORDION_TITLE } from './accordion';
import { TInput, TOutput } from '../../models/doc-data';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-accordion-doc',
  templateUrl: './accordion-doc.component.html',
  styleUrls: ['./accordion-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionDocComponent {
  constructor(private translationService: TranslationService) {}
  title = ACCORDION_TITLE;
  description = this.translationService.translate('docs.accordion.description');
  code = ACCORDION_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.accordion.label'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onItemVisibilityChange',
      returnType: 'string',
      descr: this.translationService.translate(
        'docs.accordion.onItemVisibilityChange'
      ),
    },
  ];
}

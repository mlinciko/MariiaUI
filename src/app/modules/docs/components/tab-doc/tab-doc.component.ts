import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { TAB_TITLE, TAB_CODE } from './tab';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-tab-doc',
  templateUrl: './tab-doc.component.html',
  styleUrls: ['./tab-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabDocComponent {
  constructor(private translationService: TranslationService) {}
  title = TAB_TITLE;
  description = this.translationService.translate('docs.tab.description');
  code = TAB_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.tab.label'),
    },
    {
      name: 'isActive',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.tab.isActive'),
    },
    {
      name: 'id',
      type: 'string | number | null',
      defaultValue: 'null',
      descr: this.translationService.translate('docs.tab.id'),
    },
  ];

  outputs: TOutput[] = [];
}

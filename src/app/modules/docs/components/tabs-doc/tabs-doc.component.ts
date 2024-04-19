import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { TABS_TITLE, TABS_CODE } from './tabs';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-tabs-doc',
  templateUrl: './tabs-doc.component.html',
  styleUrls: ['./tabs-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsDocComponent {
  constructor(private translationService: TranslationService) {}
  title = TABS_TITLE;
  description = this.translationService.translate('docs.tabs.description');
  code = TABS_CODE;

  inputs: TInput[] = [];

  outputs: TOutput[] = [
    {
      name: 'onSelectionChange',
      returnType: '<a href="/docs/data-types">Tab</a>',
      descr: this.translationService.translate('docs.tabs.onSelectionChange'),
    },
  ];
}

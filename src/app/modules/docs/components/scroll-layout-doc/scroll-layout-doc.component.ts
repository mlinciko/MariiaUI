import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { SCROLL_LAYOUT_TITLE, SCROLL_LAYOUT_CODE } from './scroll-layout';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-scroll-layout-doc',
  templateUrl: './scroll-layout-doc.component.html',
  styleUrls: ['./scroll-layout-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollLayoutDocComponent {
  constructor(private translationService: TranslationService) {}
  title = SCROLL_LAYOUT_TITLE;
  description = this.translationService.translate(
    'docs.scrollLayout.description'
  );
  code = SCROLL_LAYOUT_CODE;

  inputs: TInput[] = [
    {
      name: 'width',
      type: 'string',
      defaultValue: '100%',
      descr: this.translationService.translate('docs.scrollLayout.width'),
    },
    {
      name: 'height',
      type: 'string',
      defaultValue: 'auto',
      descr: this.translationService.translate('docs.scrollLayout.height'),
    },
    {
      name: 'direction',
      type: '<a href="/docs/data-types">TScrollDirection</a>',
      defaultValue: 'vertical',
      descr: this.translationService.translate('docs.scrollLayout.direction'),
    },
  ];

  outputs: TOutput[] = [];
}

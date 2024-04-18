import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import {
  SCROLL_LAYOUT_TITLE,
  SCROLL_LAYOUT_DESCRIPTION,
  SCROLL_LAYOUT_CODE,
} from './scroll-layout';

@Component({
  selector: 'app-scroll-layout-doc',
  templateUrl: './scroll-layout-doc.component.html',
  styleUrls: ['./scroll-layout-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollLayoutDocComponent {
  title = SCROLL_LAYOUT_TITLE;
  description = SCROLL_LAYOUT_DESCRIPTION;
  code = SCROLL_LAYOUT_CODE;

  inputs: TInput[] = [
    {
      name: 'width',
      type: 'string',
      defaultValue: '100%',
      descr: 'Property allows to set width for the scroll-layout component',
    },
    {
      name: 'height',
      type: 'string',
      defaultValue: 'auto',
      descr: 'Property allows to set height for the scroll-layout component',
    },
    {
      name: 'direction',
      type: '<a href="/docs/data-types">TScrollDirection</a>',
      defaultValue: 'vertical',
      descr:
        'Property allows to set direction of scroll for the scroll-layout component',
    },
  ];

  outputs: TOutput[] = [];
}

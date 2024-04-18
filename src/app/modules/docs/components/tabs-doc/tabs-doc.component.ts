import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { TABS_TITLE, TABS_DESCRIPTION, TABS_CODE } from './tabs';

@Component({
  selector: 'app-tabs-doc',
  templateUrl: './tabs-doc.component.html',
  styleUrls: ['./tabs-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsDocComponent {
  title = TABS_TITLE;
  description = TABS_DESCRIPTION;
  code = TABS_CODE;

  inputs: TInput[] = [];

  outputs: TOutput[] = [
    {
      name: 'onSelectionChange',
      returnType: '<a href="/docs/data-types">Tab</a>',
      descr:
        'Property emits an event when the active tab changes in tabs component',
    },
  ];
}

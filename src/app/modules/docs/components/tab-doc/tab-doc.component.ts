import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { TAB_TITLE, TAB_DESCRIPTION, TAB_CODE } from './tab';

@Component({
  selector: 'app-tab-doc',
  templateUrl: './tab-doc.component.html',
  styleUrls: ['./tab-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabDocComponent {
  title = TAB_TITLE;
  description = TAB_DESCRIPTION;
  code = TAB_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set a label for the tab component',
    },
    {
      name: 'isActive',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to set active state for the tab component',
    },
    {
      name: 'id',
      type: 'string | number | null',
      defaultValue: 'null',
      descr: 'Property allows to set id for the tab component',
    },
  ];

  outputs: TOutput[] = [];
}

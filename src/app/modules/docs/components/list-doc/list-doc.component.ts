import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { LIST_TITLE, LIST_DESCRIPTION, LIST_CODE } from './list';

@Component({
  selector: 'app-list-doc',
  templateUrl: './list-doc.component.html',
  styleUrls: ['./list-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDocComponent {
  title = LIST_TITLE;
  description = LIST_DESCRIPTION;
  code = LIST_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set a label for the list',
    },
    {
      name: 'items',
      type: 'any[]',
      defaultValue: '[]',
      descr: 'Property allows to set data for the list',
    },
    {
      name: 'isNumbered',
      type: 'boolean',
      defaultValue: 'false',
      descr: 'Property allows to enable numbered list',
    },
    {
      name: 'accessor',
      type: '(item: any) => any',
      defaultValue: '(item: any) => item',
      descr: 'Property allows to set accessor function for list data',
    },
  ];

  outputs: TOutput[] = [];
}

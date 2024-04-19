import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { LIST_TITLE, LIST_CODE } from './list';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-list-doc',
  templateUrl: './list-doc.component.html',
  styleUrls: ['./list-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDocComponent {
  constructor(private translationService: TranslationService) {}
  title = LIST_TITLE;
  description = this.translationService.translate('docs.list.description');
  code = LIST_CODE;

  inputs: TInput[] = [
    {
      name: 'label',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.list.label'),
    },
    {
      name: 'items',
      type: 'any[]',
      defaultValue: '[]',
      descr: this.translationService.translate('docs.list.items'),
    },
    {
      name: 'isNumbered',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.list.isNumbered'),
    },
    {
      name: 'accessor',
      type: '(item: any) => any',
      defaultValue: '(item: any) => item',
      descr: this.translationService.translate('docs.list.accessor'),
    },
  ];

  outputs: TOutput[] = [];
}

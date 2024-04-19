import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-icons-doc',
  templateUrl: './icons-doc.component.html',
  styleUrls: ['./icons-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsDocComponent {
  constructor(private translationService: TranslationService) {}
  title = this.translationService.translate('docs.icons.title');
  description = this.translationService.translate('docs.icons.description');
  code = `/*Input params */
@Input() color = '#cecece';
@Input() width = '18px';
@Input() height = '18px';`;

  inputs: TInput[] = [
    {
      name: 'color',
      type: 'string',
      defaultValue: '#cecece',
      descr: this.translationService.translate('docs.icons.inputs.color'),
    },
    {
      name: 'width',
      type: 'string',
      defaultValue: '18px',
      descr: this.translationService.translate('docs.icons.inputs.width'),
    },
    {
      name: 'height',
      type: 'string',
      defaultValue: '18px',
      descr: this.translationService.translate('docs.icons.inputs.height'),
    },
  ];
  outputs: TOutput[] = [];

  icons: { title: string; code: string }[] = [
    {
      title: 'AddIcon',
      code: `<mui-add-icon></mui-add-icon>`,
    },
    {
      title: 'ArrowDownIcon',
      code: `<mui-arrow-down-icon></mui-arrow-down-icon>`,
    },
    {
      title: 'ArrowUpDownIcon',
      code: `<mui-arrow-up-down-icon></mui-arrow-up-down-icon>`,
    },
    {
      title: 'ArrowUpIcon',
      code: `<mui-arrow-up-icon></mui-arrow-up-icon>`,
    },
    {
      title: 'CalendarIcon',
      code: `<mui-calendar-icon></mui-calendar-icon>`,
    },
    {
      title: 'CancelIcon',
      code: `<mui-cancel-icon></mui-cancel-icon>`,
    },
    {
      title: 'CheckIcon',
      code: `<mui-check-icon></mui-check-icon>`,
    },
    {
      title: 'ChevronDownIcon',
      code: `<mui-chevron-down-icon></mui-chevron-down-icon>`,
    },
    {
      title: 'ChevronLeftIcon',
      code: `<mui-chevron-left-icon></mui-chevron-left-icon>`,
    },
    {
      title: 'ChevronRightIcon',
      code: `<mui-chevron-right-icon></mui-chevron-right-icon>`,
    },
    {
      title: 'ChevronUpIcon',
      code: `<mui-chevron-up-icon></mui-chevron-up-icon>`,
    },
    {
      title: 'CircleChevronLeftIcon',
      code: `<mui-circle-chevron-left-icon></mui-circle-chevron-left-icon>`,
    },
    {
      title: 'CircleChevronRightIcon',
      code: `<mui-circle-chevron-right-icon></mui-circle-chevron-right-icon>`,
    },
    {
      title: 'DeleteIcon',
      code: `<mui-delete-icon></mui-delete-icon>`,
    },
    {
      title: 'EditIcon',
      code: `<mui-edit-icon></mui-edit-icon>`,
    },
    {
      title: 'FilterIcon',
      code: `<mui-filter-icon></mui-filter-icon>`,
    },
    {
      title: 'SaveIcon',
      code: `<mui-save-icon></mui-save-icon>`,
    },
    {
      title: 'XmarkIcon',
      code: `<mui-xmark-icon></mui-xmark-icon>`,
    },
  ];
}

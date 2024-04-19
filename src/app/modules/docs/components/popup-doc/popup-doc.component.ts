import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { POPUP_TITLE, POPUP_CODE } from './popup';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-popup-doc',
  templateUrl: './popup-doc.component.html',
  styleUrls: ['./popup-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupDocComponent {
  constructor(private translationService: TranslationService) {}
  title = POPUP_TITLE;
  description = this.translationService.translate('docs.popup.description');
  code = POPUP_CODE;

  inputs: TInput[] = [
    {
      name: 'title',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.popup.title'),
    },
    {
      name: 'buttons',
      type: '<a href="/docs/data-types">TPopupButton</a>[]',
      defaultValue: '[]',
      descr: this.translationService.translate('docs.popup.buttons'),
    },
    {
      name: 'showCloseBtn',
      type: 'boolean',
      defaultValue: 'true',
      descr: this.translationService.translate('docs.popup.showCloseBtn'),
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.popup.visible'),
    },
    {
      name: 'width',
      type: 'number',
      defaultValue: '400',
      descr: this.translationService.translate('docs.popup.width'),
    },
    {
      name: 'height',
      type: 'number',
      defaultValue: '200',
      descr: this.translationService.translate('docs.popup.height'),
    },
    {
      name: 'top',
      type: 'number',
      defaultValue: '40',
      descr: this.translationService.translate('docs.popup.top'),
    },
    {
      name: 'left',
      type: 'number',
      defaultValue: '38',
      descr: this.translationService.translate('docs.popup.left'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onPopupClose',
      returnType: `void`,
      descr: this.translationService.translate('docs.popup.onPopupClose'),
    },
    {
      name: 'visibleChange',
      returnType: `boolean`,
      descr: this.translationService.translate('docs.popup.visibleChange'),
    },
  ];
}

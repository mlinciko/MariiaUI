import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { POPUP_TITLE, POPUP_DESCRIPTION, POPUP_CODE } from './popup';

@Component({
  selector: 'app-popup-doc',
  templateUrl: './popup-doc.component.html',
  styleUrls: ['./popup-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupDocComponent {
  title = POPUP_TITLE;
  description = POPUP_DESCRIPTION;
  code = POPUP_CODE;

  inputs: TInput[] = [
    {
      name: 'title',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set a header title for the popup',
    },
    {
      name: 'buttons',
      type: '<a href="/docs/data-types">TPopupButton</a>[]',
      defaultValue: '[]',
      descr: 'Property allows to set buttons for the popup component',
    },
    {
      name: 'showCloseBtn',
      type: 'boolean',
      defaultValue: 'true',
      descr: 'Property allows to enable close button for the popup component',
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: 'false',
      descr:
        'Property allows to enable visibility status for the popup component',
    },
    {
      name: 'width',
      type: 'number',
      defaultValue: '400',
      descr: 'Property allows to set width in pixels of the popup component',
    },
    {
      name: 'height',
      type: 'number',
      defaultValue: '200',
      descr: 'Property allows to set height in pixels of the popup component',
    },
    {
      name: 'top',
      type: 'number',
      defaultValue: '40',
      descr: 'Property allows to set top in percent of the popup component',
    },
    {
      name: 'left',
      type: 'number',
      defaultValue: '38',
      descr: 'Property allows to set left in percent of the popup component',
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onPopupClose',
      returnType: `void`,
      descr:
        "Property emits a new value when the popup component's close button is clicked",
    },
    {
      name: 'visibleChange',
      returnType: `boolean`,
      descr:
        'Property emits a new value when visible input of the component changes',
    },
  ];
}

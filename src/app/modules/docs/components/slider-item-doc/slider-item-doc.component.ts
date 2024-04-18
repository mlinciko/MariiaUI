import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import {
  SLIDER_ITEM_TITLE,
  SLIDER_ITEM_DESCRIPTION,
  SLIDER_ITEM_CODE,
} from './slider-item';

@Component({
  selector: 'app-slider-item-doc',
  templateUrl: './slider-item-doc.component.html',
  styleUrls: ['./slider-item-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderItemDocComponent {
  title = SLIDER_ITEM_TITLE;
  description = SLIDER_ITEM_DESCRIPTION;
  code = SLIDER_ITEM_CODE;

  inputs: TInput[] = [
    {
      name: 'isActive',
      type: 'boolean',
      defaultValue: 'false',
      descr:
        'Property allows to set active state for the slider-item component',
    },
  ];

  outputs: TOutput[] = [];
}

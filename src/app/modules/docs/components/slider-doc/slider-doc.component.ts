import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { SLIDER_TITLE, SLIDER_DESCRIPTION, SLIDER_CODE } from './slider';

@Component({
  selector: 'app-slider-doc',
  templateUrl: './slider-doc.component.html',
  styleUrls: ['./slider-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderDocComponent {
  title = SLIDER_TITLE;
  description = SLIDER_DESCRIPTION;
  code = SLIDER_CODE;

  inputs: TInput[] = [
    {
      name: 'showDots',
      type: 'boolean',
      defaultValue: 'true',
      descr: 'Property allows to set navigation dots for the slider component',
    },
    {
      name: 'width',
      type: 'string',
      defaultValue: '100%',
      descr: 'Property allows to set width for the slider component',
    },
    {
      name: 'slideWidth',
      type: 'number',
      defaultValue: '200',
      descr:
        'Property allows to set width of the slide for the slider component',
    },
    {
      name: 'gap',
      type: 'number',
      defaultValue: '20',
      descr:
        'Property allows to set width of the gap between slide items for the slider component',
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onSlideActiveChange',
      returnType: 'number',
      descr:
        'Property emits an event when the active slide item changes. Returns index of active slide item',
    },
  ];
}

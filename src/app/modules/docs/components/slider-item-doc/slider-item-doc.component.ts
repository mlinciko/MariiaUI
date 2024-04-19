import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { SLIDER_ITEM_TITLE, SLIDER_ITEM_CODE } from './slider-item';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-slider-item-doc',
  templateUrl: './slider-item-doc.component.html',
  styleUrls: ['./slider-item-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderItemDocComponent {
  constructor(private translationService: TranslationService) {}
  title = SLIDER_ITEM_TITLE;
  description = this.translationService.translate(
    'docs.sliderItem.description'
  );
  code = SLIDER_ITEM_CODE;

  inputs: TInput[] = [
    {
      name: 'isActive',
      type: 'boolean',
      defaultValue: 'false',
      descr: this.translationService.translate('docs.sliderItem.isActive'),
    },
  ];

  outputs: TOutput[] = [];
}

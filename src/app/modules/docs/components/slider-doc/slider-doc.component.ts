import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { SLIDER_TITLE, SLIDER_CODE } from './slider';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-slider-doc',
  templateUrl: './slider-doc.component.html',
  styleUrls: ['./slider-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderDocComponent {
  constructor(private translationService: TranslationService) {}
  title = SLIDER_TITLE;
  description = this.translationService.translate('docs.slider.description');
  code = SLIDER_CODE;

  inputs: TInput[] = [
    {
      name: 'showDots',
      type: 'boolean',
      defaultValue: 'true',
      descr: this.translationService.translate('docs.slider.showDots'),
    },
    {
      name: 'width',
      type: 'string',
      defaultValue: '100%',
      descr: this.translationService.translate('docs.slider.width'),
    },
    {
      name: 'slideWidth',
      type: 'number',
      defaultValue: '200',
      descr: this.translationService.translate('docs.slider.slideWidth'),
    },
    {
      name: 'gap',
      type: 'number',
      defaultValue: '20',
      descr: this.translationService.translate('docs.slider.gap'),
    },
  ];

  outputs: TOutput[] = [
    {
      name: 'onSlideActiveChange',
      returnType: 'number',
      descr: this.translationService.translate(
        'docs.slider.onSlideActiveChange'
      ),
    },
  ];
}

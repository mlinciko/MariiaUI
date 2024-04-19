import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mui-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderItemComponent {
  /*Input params */
  @Input() isActive = false;
}

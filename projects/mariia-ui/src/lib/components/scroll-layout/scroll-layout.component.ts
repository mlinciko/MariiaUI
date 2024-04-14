import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TScrollDirection } from './scroll-layout';

@Component({
  selector: 'mui-scroll-layout',
  templateUrl: './scroll-layout.component.html',
  styleUrls: ['./scroll-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollLayoutComponent {
  /*Input params */
  @Input() width = '100%';
  @Input() height = 'auto';
  @Input() direction: TScrollDirection = 'vertical';

  get overflowType(): string {
    switch (this.direction) {
      case 'both':
        return 'overflow: scroll';
      case 'horizontal':
        return 'overflow-y scroll';
      case 'vertical':
        return 'overflow-x: scroll';
    }
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-circle-chevron-right-icon',
  templateUrl: './circle-chevron-right-icon.component.html',
  styleUrls: ['./circle-chevron-right-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleChevronRightIconComponent extends BaseIcon {}

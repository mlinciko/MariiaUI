import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-circle-chevron-left-icon',
  templateUrl: './circle-chevron-left-icon.component.html',
  styleUrls: ['./circle-chevron-left-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleChevronLeftIconComponent extends BaseIcon {}

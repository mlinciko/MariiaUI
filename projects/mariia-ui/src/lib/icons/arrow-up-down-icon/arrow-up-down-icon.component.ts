import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-arrow-up-down-icon',
  templateUrl: './arrow-up-down-icon.component.html',
  styleUrls: ['./arrow-up-down-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowUpDownIconComponent extends BaseIcon {}

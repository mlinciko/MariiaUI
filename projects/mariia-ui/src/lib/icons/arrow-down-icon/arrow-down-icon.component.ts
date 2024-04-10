import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-arrow-down-icon',
  templateUrl: './arrow-down-icon.component.html',
  styleUrls: ['./arrow-down-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowDownIconComponent extends BaseIcon {}

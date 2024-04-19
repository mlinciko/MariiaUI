import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-arrow-up-icon',
  templateUrl: './arrow-up-icon.component.html',
  styleUrls: ['./arrow-up-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowUpIconComponent extends BaseIcon {}

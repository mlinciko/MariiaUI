import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-chevron-down-icon',
  templateUrl: './chevron-down-icon.component.html',
  styleUrls: ['./chevron-down-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChevronDownIconComponent extends BaseIcon {}

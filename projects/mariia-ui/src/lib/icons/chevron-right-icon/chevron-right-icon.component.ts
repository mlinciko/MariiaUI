import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-chevron-right-icon',
  templateUrl: './chevron-right-icon.component.html',
  styleUrls: ['./chevron-right-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChevronRightIconComponent extends BaseIcon {}

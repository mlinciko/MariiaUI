import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-chevron-left-icon',
  templateUrl: './chevron-left-icon.component.html',
  styleUrls: ['./chevron-left-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChevronLeftIconComponent extends BaseIcon {}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-chevron-up-icon',
  templateUrl: './chevron-up-icon.component.html',
  styleUrls: ['./chevron-up-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChevronUpIconComponent extends BaseIcon {}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-filter-icon',
  templateUrl: './filter-icon.component.html',
  styleUrls: ['./filter-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterIconComponent extends BaseIcon {}

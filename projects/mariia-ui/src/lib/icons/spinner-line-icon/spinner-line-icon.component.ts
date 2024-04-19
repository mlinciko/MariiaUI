import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-spinner-line-icon',
  templateUrl: './spinner-line-icon.component.html',
  styleUrls: ['./spinner-line-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerLineIconComponent extends BaseIcon {}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-spinner-icon',
  templateUrl: './spinner-icon.component.html',
  styleUrls: ['./spinner-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerIconComponent extends BaseIcon {}

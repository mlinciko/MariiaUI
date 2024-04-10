import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-check-icon',
  templateUrl: './check-icon.component.html',
  styleUrls: ['./check-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckIconComponent extends BaseIcon {}

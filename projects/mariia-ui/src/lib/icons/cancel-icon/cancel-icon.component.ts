import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-cancel-icon',
  templateUrl: './cancel-icon.component.html',
  styleUrls: ['./cancel-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CancelIconComponent extends BaseIcon {}

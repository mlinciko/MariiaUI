import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-save-icon',
  templateUrl: './save-icon.component.html',
  styleUrls: ['./save-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaveIconComponent extends BaseIcon {}

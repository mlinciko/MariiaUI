import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-edit-icon',
  templateUrl: './edit-icon.component.html',
  styleUrls: ['./edit-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditIconComponent extends BaseIcon {}

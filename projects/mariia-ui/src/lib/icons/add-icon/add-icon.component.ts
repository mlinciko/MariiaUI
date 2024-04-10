import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-add-icon',
  templateUrl: './add-icon.component.html',
  styleUrls: ['./add-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddIconComponent extends BaseIcon {}

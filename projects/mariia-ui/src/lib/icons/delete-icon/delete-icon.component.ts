import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-delete-icon',
  templateUrl: './delete-icon.component.html',
  styleUrls: ['./delete-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteIconComponent extends BaseIcon {}

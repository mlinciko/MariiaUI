import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-xmark-icon',
  templateUrl: './xmark-icon.component.html',
  styleUrls: ['./xmark-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XmarkIconComponent extends BaseIcon {}

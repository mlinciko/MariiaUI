import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-xmark',
  templateUrl: './xmark.component.html',
  styleUrls: ['./xmark.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XmarkComponent extends BaseIcon {}

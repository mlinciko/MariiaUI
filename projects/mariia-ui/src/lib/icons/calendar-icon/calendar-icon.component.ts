import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseIcon } from '../base-icon/base-icon.directive';

@Component({
  selector: 'mui-calendar-icon',
  templateUrl: './calendar-icon.component.html',
  styleUrls: ['./calendar-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarIconComponent extends BaseIcon {}

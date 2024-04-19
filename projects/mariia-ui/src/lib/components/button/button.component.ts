/* eslint-disable @angular-eslint/no-output-on-prefix */
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ButtonTypeEnum } from './button';

@Component({
  selector: 'mui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  /*Input params */
  @Input() label = '';
  @Input() type: ButtonTypeEnum = ButtonTypeEnum.Default;
  @Input() disabled = false;

  /*Output events */
  @Output() onClick: EventEmitter<Event> = new EventEmitter();

  get typeClass(): string {
    switch (this.type) {
      case ButtonTypeEnum.Default:
        return 'default';
      case ButtonTypeEnum.Error:
        return 'error';
      case ButtonTypeEnum.Warning:
        return 'warning';
      case ButtonTypeEnum.Success:
        return 'success';
      case ButtonTypeEnum.Flat:
        return 'flat';
    }
  }
}

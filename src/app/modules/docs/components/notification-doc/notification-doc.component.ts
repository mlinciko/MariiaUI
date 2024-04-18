import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import {
  NOTIFICATION_TITLE,
  NOTIFICATION_DESCRIPTION,
  NOTIFICATION_CODE,
} from './notification';

@Component({
  selector: 'app-notification-doc',
  templateUrl: './notification-doc.component.html',
  styleUrls: ['./notification-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationDocComponent {
  title = NOTIFICATION_TITLE;
  description = NOTIFICATION_DESCRIPTION;
  code = NOTIFICATION_CODE;

  inputs: TInput[] = [
    {
      name: 'message',
      type: 'string',
      defaultValue: "' '",
      descr: 'Property allows to set message for the notification component',
    },
    {
      name: 'duration',
      type: 'number',
      defaultValue: '2000',
      descr:
        'Property allows to set a duration time in millisecons for the notification component',
    },
    {
      name: 'type',
      type: 'NotificationTypeEnum',
      defaultValue: 'NotificationTypeEnum.Default',
      descr: 'Property allows to set type for the notification component',
    },
  ];

  outputs: TOutput[] = [];
}

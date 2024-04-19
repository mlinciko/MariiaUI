import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { NOTIFICATION_TITLE, NOTIFICATION_CODE } from './notification';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-notification-doc',
  templateUrl: './notification-doc.component.html',
  styleUrls: ['./notification-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationDocComponent {
  constructor(private translationService: TranslationService) {}
  title = NOTIFICATION_TITLE;
  description = this.translationService.translate(
    'docs.notification.description'
  );
  code = NOTIFICATION_CODE;

  inputs: TInput[] = [
    {
      name: 'message',
      type: 'string',
      defaultValue: "' '",
      descr: this.translationService.translate('docs.notification.message'),
    },
    {
      name: 'duration',
      type: 'number',
      defaultValue: '2000',
      descr: this.translationService.translate('docs.notification.duration'),
    },
    {
      name: 'type',
      type: 'NotificationTypeEnum',
      defaultValue: 'NotificationTypeEnum.Default',
      descr: this.translationService.translate('docs.notification.type'),
    },
  ];

  outputs: TOutput[] = [];
}

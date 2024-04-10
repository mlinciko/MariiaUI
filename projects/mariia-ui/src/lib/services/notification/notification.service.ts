import { Injectable } from '@angular/core';
import {
  NotificationTypeEnum,
  TNotification,
} from '../../components/notification/notification';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notification$: Subject<TNotification> = new Subject();

  default(message?: string, duration?: number): void {
    this.notify(NotificationTypeEnum.Default, message, duration);
  }

  success(message?: string, duration?: number): void {
    this.notify(NotificationTypeEnum.Success, message, duration);
  }

  warning(message?: string, duration?: number): void {
    this.notify(NotificationTypeEnum.Warning, message, duration);
  }

  error(message?: string, duration?: number): void {
    this.notify(NotificationTypeEnum.Error, message, duration);
  }

  notify(
    type: NotificationTypeEnum,
    message?: string,
    duration?: number
  ): void {
    this.notification$.next({
      message: message || '',
      duration: duration || 2000,
      type,
    });
  }
}

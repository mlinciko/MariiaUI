import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NotificationService } from '../../services/notification/notification.service';
import { NotificationTypeEnum, TNotification } from './notification';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'mui-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent implements OnInit, OnDestroy {
  notifications: TNotification[] = [];
  destroy$: Subject<boolean> = new Subject();

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.notification$
      .pipe(
        takeUntil(this.destroy$),
        tap(notification => {
          this.notifications.push(notification);

          setTimeout(() => {
            this.notifications.shift();
          }, notification.duration);
        })
      )
      .subscribe();
  }

  getTypeClass(notification: TNotification): string {
    switch (notification.type) {
      case NotificationTypeEnum.Default:
        return 'default';
      case NotificationTypeEnum.Error:
        return 'error';
      case NotificationTypeEnum.Success:
        return 'success';
      case NotificationTypeEnum.Warning:
        return 'warning';
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

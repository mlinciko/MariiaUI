import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NotificationService } from 'projects/mariia-ui/src/public-api';

@Component({
  selector: 'app-notification-demo',
  templateUrl: './notification-demo.component.html',
  styleUrls: ['./notification-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationDemoComponent {
  title = 'Notification';
  componentCode = `
  import { Component } from '@angular/core';
  import { NotificationService } from 'projects/mariia-ui/src/public-api';
  
  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {

    constructor(private notification: NotificationService) {}
  
    showDefaultNotification(): void {
      this.notification.default('Default Notification', 3000);
    }
  
    showWarningNotification(): void {
      this.notification.warning('Warning Notification', 3000);
    }
  
    showErrorNotification(): void {
      this.notification.error('Error Notification', 3000);
    }
  
    showSuccessNotification(): void {
      this.notification.success('Success Notification', 3000);
    }
  }
  
  `;
  templateCode = `
<mui-button
  [label]="'Show Default Notification'"
  (onClick)="showDefaultNotification()"></mui-button>
<mui-button
  [label]="'Show Warning Notification'"
  (onClick)="showWarningNotification()"></mui-button>
<mui-button
  [label]="'Show Error Notification'"
  (onClick)="showErrorNotification()"></mui-button>
<mui-button
  [label]="'Show Success Notification'"
  (onClick)="showSuccessNotification()"></mui-button>
  `;

  constructor(private notification: NotificationService) {}

  showDefaultNotification(): void {
    this.notification.default('Default Notification', 3000);
  }

  showWarningNotification(): void {
    this.notification.warning('Warning Notification', 3000);
  }

  showErrorNotification(): void {
    this.notification.error('Error Notification', 3000);
  }

  showSuccessNotification(): void {
    this.notification.success('Success Notification', 3000);
  }
}

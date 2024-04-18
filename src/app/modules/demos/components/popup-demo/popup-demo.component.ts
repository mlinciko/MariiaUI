import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonTypeEnum } from 'projects/mariia-ui/src/lib/components/button/button';
import { TPopupButton } from 'projects/mariia-ui/src/lib/components/popup/popup';

@Component({
  selector: 'app-popup-demo',
  templateUrl: './popup-demo.component.html',
  styleUrls: ['./popup-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupDemoComponent {
  titlePage = 'Popup';
  componentCode = `
  import { Component } from '@angular/core';
  import { TPopupButton, ButtonTypeEnum } from 'mariia-ui';
  
  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    isPopupVisible = false;
    title = 'Confirm action';
    popupButtons: TPopupButton[] = [
      {
        label: 'Save',
        type: ButtonTypeEnum.Flat,
        callback: (...params: any[]) => {
          return;
        },
      },
      {
        label: 'Cancel',
        type: ButtonTypeEnum.Default,
        callback: (...params: any[]) => {
          return;
        },
      },
    ];
  
    changePopupVisibility(): void {
      this.isPopupVisible = !this.isPopupVisible;
    }
  }
  `;
  templateCode = `<mui-button
  [label]="'Show popup'"
  (onClick)="changePopupVisibility()"></mui-button>
<mui-popup
  [(visible)]="isPopupVisible"
  [title]="title"
  [buttons]="popupButtons">
  Are you sure you want to exit?
</mui-popup>`;

  isPopupVisible = false;
  title = 'Confirm action';
  popupButtons: TPopupButton[] = [
    {
      label: 'Save',
      type: ButtonTypeEnum.Flat,
      callback: (...params: any[]) => {
        return;
      },
    },
    {
      label: 'Cancel',
      type: ButtonTypeEnum.Default,
      callback: (...params: any[]) => {
        return;
      },
    },
  ];

  changePopupVisibility(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }
}

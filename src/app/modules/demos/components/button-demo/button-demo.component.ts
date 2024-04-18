import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonTypeEnum } from 'projects/mariia-ui/src/lib/components/button/button';

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDemoComponent {
  title = 'Button';
  componentCode = `
  import { Component } from '@angular/core';
  import { ButtonTypeEnum } from 'mariia-ui';
  
  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    ButtonTypeEnum = ButtonTypeEnum;
  
    handleBtnClick(e: Event): void {
      return;
    }
  }`;
  templateCode = `
  <mui-button
    [label]="'Click'"
    [type]="ButtonTypeEnum.Default"
    (onClick)="handleBtnClick($event)"></mui-button>
  <mui-button
    [label]="'Click'"
    [type]="ButtonTypeEnum.Warning"
    (onClick)="handleBtnClick($event)"></mui-button>
  <mui-button
    [label]="'Click'"
    [type]="ButtonTypeEnum.Error"
    (onClick)="handleBtnClick($event)"></mui-button>
  <mui-button
    [label]="'Click'"
    [type]="ButtonTypeEnum.Success"
    (onClick)="handleBtnClick($event)"></mui-button>
  <mui-button
    [label]="'Click'"
    [type]="ButtonTypeEnum.Flat"
    (onClick)="handleBtnClick($event)"></mui-button>

  <mui-button
    [label]="'Click'"
    [type]="ButtonTypeEnum.Default"
    [disabled]="true"></mui-button>
  <mui-button
    [label]="'Click'"
    [type]="ButtonTypeEnum.Warning"
    [disabled]="true"></mui-button>
  <mui-button
    [label]="'Click'"
    [type]="ButtonTypeEnum.Error"
    [disabled]="true"></mui-button>
  <mui-button
    [label]="'Click'"
    [type]="ButtonTypeEnum.Success"
    [disabled]="true"></mui-button>
  <mui-button
    [label]="'Click'"
    [type]="ButtonTypeEnum.Flat"
    [disabled]="true"></mui-button>`;

  ButtonTypeEnum = ButtonTypeEnum;

  handleBtnClick(e: Event): void {
    return;
  }
}

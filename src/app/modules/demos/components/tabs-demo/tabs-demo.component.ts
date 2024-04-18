import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Tab } from 'projects/mariia-ui/src/lib/components/tabs/tabs';

@Component({
  selector: 'app-tabs-demo',
  templateUrl: './tabs-demo.component.html',
  styleUrls: ['./tabs-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsDemoComponent {
  title = 'Tabs';
  componentCode = `
  import { Component } from '@angular/core';
  import { Tab } from 'mariia-ui';
  
  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    tabs: Tab[] = [
      {
        label: 'Tab 1',
        isActive: true,
      },
      {
        label: 'Tab 2',
        isActive: false,
      },
      {
        label: 'Tab 3',
        isActive: false,
      },
    ];
  }
  `;
  templateCode = `<mui-tabs>
  <mui-tab
    *ngFor="let tab of tabs"
    [label]="tab.label"
    [isActive]="!!tab.isActive">
    <p>
      1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
      placeat fugit omnis maxime dolore obcaecati doloribus perspiciatis
      dolorum repudiandae, facilis at blanditiis, enim numquam quos. Deserunt,
      possimus. Quisquam, delectus et.
    </p>
  </mui-tab>
</mui-tabs>`;

  tabs: Tab[] = [
    {
      label: 'Tab 1',
      isActive: true,
    },
    {
      label: 'Tab 2',
      isActive: false,
    },
    {
      label: 'Tab 3',
      isActive: false,
    },
  ];
}

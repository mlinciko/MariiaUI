import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-demo',
  templateUrl: './list-demo.component.html',
  styleUrls: ['./list-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDemoComponent {
  title = 'List';
  componentCode = `import { Component } from '@angular/core';

  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    listItems = [
      {
        id: 1,
        title: 'Groceries',
      },
      {
        id: 2,
        title: 'Meeting with Client',
      },
      {
        id: 3,
        title: 'Gym',
      },
      {
        id: 4,
        title: 'Read Book',
      },
    ];
    listAccessor = (item: { id: number; title: string }) => item.title;
  }
  `;
  templateCode = `<mui-list
  [items]="listItems"
  [accessor]="listAccessor"
  [isNumbered]="true"></mui-list>`;

  listItems = [
    {
      id: 1,
      title: 'Groceries',
    },
    {
      id: 2,
      title: 'Meeting with Client',
    },
    {
      id: 3,
      title: 'Gym',
    },
    {
      id: 4,
      title: 'Read Book',
    },
  ];
  listAccessor = (item: { id: number; title: string }) => item.title;
}

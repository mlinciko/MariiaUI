import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-scroll-layout-demo',
  templateUrl: './scroll-layout-demo.component.html',
  styleUrls: ['./scroll-layout-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollLayoutDemoComponent {
  title = 'ScrollLayout';
  componentCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    width = '600px';
    height = '300px';
  }
  `;
  templateCode = `<mui-scroll-layout [width]="width" [height]="height">
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dolorum,
    aliquam eveniet dolore accusamus similique sed maiores aperiam nemo
    voluptates modi quaerat placeat culpa possimus. Placeat exercitationem
    quis provident beatae. Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Sit dolorum, aliquam eveniet dolore accusamus similique sed maiores
    aperiam nemo voluptates modi quaerat placeat culpa possimus. Placeat
    exercitationem quis provident beatae. Lorem ipsum dolor, sit amet
    consectetur adipisicing elit. Sit dolorum, aliquam eveniet dolore
    accusamus similique sed maiores aperiam nemo voluptates modi quaerat
    placeat culpa possimus. Placeat exercitationem quis provident beatae.
  </p>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dolorum,
    aliquam eveniet dolore accusamus similique sed maiores aperiam nemo
    voluptates modi quaerat placeat culpa possimus. Placeat exercitationem
    quis provident beatae. Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Sit dolorum, aliquam eveniet dolore accusamus similique sed maiores
    aperiam nemo voluptates modi quaerat placeat culpa possimus. Placeat
    exercitationem quis provident beatae. Lorem ipsum dolor, sit amet
    consectetur adipisicing elit. Sit dolorum, aliquam eveniet dolore
    accusamus similique sed maiores aperiam nemo voluptates modi quaerat
    placeat culpa possimus. Placeat exercitationem quis provident beatae.
  </p>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dolorum,
    aliquam eveniet dolore accusamus similique sed maiores aperiam nemo
    voluptates modi quaerat placeat culpa possimus. Placeat exercitationem
    quis provident beatae. Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Sit dolorum, aliquam eveniet dolore accusamus similique sed maiores
    aperiam nemo voluptates modi quaerat placeat culpa possimus. Placeat
    exercitationem quis provident beatae. Lorem ipsum dolor, sit amet
    consectetur adipisicing elit. Sit dolorum, aliquam eveniet dolore
    accusamus similique sed maiores aperiam nemo voluptates modi quaerat
    placeat culpa possimus. Placeat exercitationem quis provident beatae.
  </p>
</mui-scroll-layout>`;

  width = '600px';
  height = '300px';
}

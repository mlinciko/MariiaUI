import { Component, Input } from '@angular/core';

@Component({
  selector: 'mui-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent {
  /*Input params */
  @Input() label = '';
  @Input() active = false;
  @Input() id: string | number | null = null;
}

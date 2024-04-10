import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mui-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  /*Input params */
  @Input() label = '';
  @Input() items: any[] = [];
  @Input() isNumbered = false;
  @Input() accessor: (item: any) => any = (item: any) => item;
}

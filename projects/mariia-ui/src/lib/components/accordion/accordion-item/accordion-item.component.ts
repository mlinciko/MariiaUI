/* eslint-disable @angular-eslint/no-output-on-prefix */
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'mui-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItemComponent {
  /*Input params */
  @Input() label = '';
  @Input() isExpanded = false;

  /*Output events */
  @Output() onChange: EventEmitter<void> = new EventEmitter();
}

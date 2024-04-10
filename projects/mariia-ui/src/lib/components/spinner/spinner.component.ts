import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TSpinnerMode } from './spinner';

@Component({
  selector: 'mui-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  /*Input params */
  @Input() visible = false;
  @Input() width = '18px';
  @Input() height = '18px';
  @Input() mode: TSpinnerMode = 'line';
}

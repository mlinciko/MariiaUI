import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TSpinnerMode } from './spinner';

@Component({
  selector: 'mui-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  /*Input params */
  @Input() visible = false;
  @Input() color = '#cecece';
  @Input() width = '18px';
  @Input() height = '18px';
  @Input() mode: TSpinnerMode = 'line';
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { ButtonTypeEnum } from 'projects/mariia-ui/src/lib/components/button/button';

@Component({
  selector: 'app-doc-page',
  templateUrl: './doc-page.component.html',
  styleUrls: ['./doc-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocPageComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() code = '';
  @Input() demoLink = '';
  @Input() inputs: TInput[] = [];
  @Input() outputs: TOutput[] = [];

  btnType = ButtonTypeEnum.Flat;

  goToDemo(): void {
    return;
  }
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonTypeEnum } from 'projects/mariia-ui/src/lib/components/button/button';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoPageComponent {
  @Input() title = '';
  @Input() showComponent = true;
  @Input() showTemplate = true;
  @Input() showService = true;
  @Input() showCSS = false;
  @Input() componentCode = '';
  @Input() templateCode = '';
  @Input() serviceCode = '';
  @Input() cssCode = '';

  btnType = ButtonTypeEnum.Flat;

  goToSandBox(): void {
    return;
  }
}

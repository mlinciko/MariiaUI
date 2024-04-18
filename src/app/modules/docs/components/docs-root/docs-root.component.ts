import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-docs-root',
  templateUrl: './docs-root.component.html',
  styleUrls: ['./docs-root.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsRootComponent {

}

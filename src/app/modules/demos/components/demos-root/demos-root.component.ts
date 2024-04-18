import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-demos-root',
  templateUrl: './demos-root.component.html',
  styleUrls: ['./demos-root.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemosRootComponent {}

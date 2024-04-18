import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MENU_ITEMS } from './header-menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  menuItems = MENU_ITEMS;
}

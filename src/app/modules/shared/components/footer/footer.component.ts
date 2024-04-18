import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MENU_ITEMS } from '../header/header-menu';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  menuItems = MENU_ITEMS;
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TMenuItem } from '../../../docs/components/docs-menu/docs-menu';
import { DEMOS_MENU_ITEMS } from './demos-menu';

@Component({
  selector: 'app-demos-menu',
  templateUrl: './demos-menu.component.html',
  styleUrls: ['./demos-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemosMenuComponent implements OnInit {
  readonly menuItems: TMenuItem[] = DEMOS_MENU_ITEMS;
  readonly ITEM_PADDING = 30;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const currentUrl = this.trimUrlPath(this.router.url);
    this.activateItem(currentUrl);
  }

  trimUrlPath(urlPath: string): string {
    if (urlPath.startsWith('/demos/')) {
      return urlPath.substring(7);
    }
    return urlPath;
  }

  activateItem(url: string): void {
    const traverse = (item: TMenuItem) => {
      if (item.route === url) {
        item.isActive = true;
      }
      if (item.children) {
        item.children.forEach(child => traverse(child));
      }
    };

    this.menuItems.forEach(item => traverse(item));
  }

  unactivateAllItems(): void {
    const traverse = (item: TMenuItem) => {
      item.isActive = false;
      if (item.children) {
        item.children.forEach(child => traverse(child));
      }
    };

    this.menuItems.forEach(item => traverse(item));
  }

  setActiveItem(item: TMenuItem): void {
    if (!item.children) {
      this.router.navigateByUrl(`demos/${item.route}`);
      this.unactivateAllItems();
      item.isActive = true;
    } else item.isExpanded = !item.isExpanded;
  }

  getItemPadding(item: TMenuItem): string {
    return `${item.level * this.ITEM_PADDING}px`;
  }
}

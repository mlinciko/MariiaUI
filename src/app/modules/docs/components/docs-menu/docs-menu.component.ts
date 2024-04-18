import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DOCS_MENU_ITEMS, TMenuItem } from './docs-menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docs-menu',
  templateUrl: './docs-menu.component.html',
  styleUrls: ['./docs-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsMenuComponent implements OnInit {
  readonly menuItems: TMenuItem[] = DOCS_MENU_ITEMS;
  readonly ITEM_PADDING = 30;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const currentUrl = this.trimUrlPath(this.router.url);
    this.activateItem(currentUrl);
  }

  trimUrlPath(urlPath: string): string {
    if (urlPath.startsWith('/docs/')) {
      return urlPath.substring(6);
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
      this.router.navigateByUrl(`docs/${item.route}`);
      this.unactivateAllItems();
      item.isActive = true;
    } else item.isExpanded = !item.isExpanded;
  }

  getItemPadding(item: TMenuItem): string {
    return `${item.level * this.ITEM_PADDING}px`;
  }
}

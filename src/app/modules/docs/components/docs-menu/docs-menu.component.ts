import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TMenuItem } from './docs-menu';
import { Router } from '@angular/router';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-docs-menu',
  templateUrl: './docs-menu.component.html',
  styleUrls: ['./docs-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsMenuComponent implements OnInit {
  readonly ITEM_PADDING = 30;

  constructor(
    private router: Router,
    private translationService: TranslationService
  ) {}

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

  readonly menuItems: TMenuItem[] = [
    {
      route: 'overview',
      title: this.translationService.translate('docs.menu.overview'),
      isActive: false,
      level: 0,
    },
    {
      route: 'getting-started',
      title: this.translationService.translate('docs.menu.gettingStarted'),
      isActive: false,
      level: 0,
    },
    {
      route: 'translation',
      title: this.translationService.translate('docs.menu.translation'),
      isActive: false,
      level: 0,
    },
    {
      route: 'themes',
      title: this.translationService.translate('docs.menu.themes'),
      isActive: false,
      level: 0,
    },
    {
      route: 'styling',
      title: this.translationService.translate('docs.menu.styling'),
      isActive: false,
      level: 0,
    },
    {
      route: 'icons',
      title: this.translationService.translate('docs.menu.icons'),
      isActive: false,
      level: 0,
    },
    {
      route: 'data-types',
      title: this.translationService.translate('docs.menu.dataTypes'),
      isActive: false,
      level: 0,
    },
    {
      route: 'data-binding',
      title: this.translationService.translate('docs.menu.dataBinding'),
      isActive: false,
      level: 0,
    },
    {
      route: 'ui-components',
      title: this.translationService.translate('docs.menu.uiComponents'),
      isActive: false,
      isExpanded: false,
      level: 0,
      children: [
        {
          route: 'accordion',
          title: 'Accordion',
          isActive: false,
          level: 1,
        },
        {
          route: 'accordion-item',
          title: 'AccordionItem',
          isActive: false,
          level: 1,
        },
        {
          route: 'bar-chart',
          title: 'BarChart',
          isActive: false,
          level: 1,
        },
        {
          route: 'button',
          title: 'Button',
          isActive: false,
          level: 1,
        },
        {
          route: 'checkbox',
          title: 'Checkbox',
          isActive: false,
          level: 1,
        },
        {
          route: 'date-picker',
          title: 'DatePicker',
          isActive: false,
          level: 1,
        },
        {
          route: 'dropdown',
          title: 'Dropdown',
          isActive: false,
          level: 1,
        },
        {
          route: 'file-picker',
          title: 'FilePicker',
          isActive: false,
          level: 1,
        },
        {
          route: 'input',
          title: 'Input',
          isActive: false,
          level: 1,
        },
        {
          route: 'line-chart',
          title: 'LineChart',
          isActive: false,
          level: 1,
        },
        {
          route: 'list',
          title: 'List',
          isActive: false,
          level: 1,
        },
        {
          route: 'lookup',
          title: 'Lookup',
          isActive: false,
          level: 1,
        },
        {
          route: 'notification',
          title: 'Notification',
          isActive: false,
          level: 1,
        },
        {
          route: 'numberbox',
          title: 'Numberbox',
          isActive: false,
          level: 1,
        },
        {
          route: 'pie-chart',
          title: 'PieChart',
          isActive: false,
          level: 1,
        },
        {
          route: 'popup',
          title: 'Popup',
          isActive: false,
          level: 1,
        },
        {
          route: 'radio-button',
          title: 'RadioButton',
          isActive: false,
          level: 1,
        },
        {
          route: 'radio-group',
          title: 'RadioGroup',
          isActive: false,
          level: 1,
        },
        {
          route: 'scroll-layout',
          title: 'ScrollLayout',
          isActive: false,
          level: 1,
        },
        {
          route: 'slide-toggle',
          title: 'SlideToggle',
          isActive: false,
          level: 1,
        },
        {
          route: 'slider',
          title: 'Slider',
          isActive: false,
          level: 1,
        },
        {
          route: 'slider-item',
          title: 'SliderItem',
          isActive: false,
          level: 1,
        },
        {
          route: 'spinner',
          title: 'Spinner',
          isActive: false,
          level: 1,
        },
        {
          route: 'table',
          title: 'Table',
          isActive: false,
          level: 1,
        },
        {
          route: 'tabs',
          title: 'Tabs',
          isActive: false,
          level: 1,
        },
        {
          route: 'tab',
          title: 'Tab',
          isActive: false,
          level: 1,
        },
        {
          route: 'textarea',
          title: 'Texarea',
          isActive: false,
          level: 1,
        },
        {
          route: 'tooltip',
          title: 'Tooltip',
          isActive: false,
          level: 1,
        },
      ],
    },
  ];
}

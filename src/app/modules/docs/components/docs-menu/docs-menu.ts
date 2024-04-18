export type TMenuItem = {
  route: string;
  title: string;
  isActive: boolean;
  level: number;
  isExpanded?: boolean;
  children?: TMenuItem[];
};

export const DOCS_MENU_ITEMS: TMenuItem[] = [
  {
    route: 'overview',
    title: 'Overview',
    isActive: false,
    level: 0,
  },
  {
    route: 'getting-started',
    title: 'Getting started',
    isActive: false,
    level: 0,
  },
  {
    route: 'internationalization',
    title: 'Internationalization',
    isActive: false,
    level: 0,
  },
  {
    route: 'themes',
    title: 'Themes',
    isActive: false,
    level: 0,
  },
  {
    route: 'styling',
    title: 'Styling',
    isActive: false,
    level: 0,
  },
  {
    route: 'icons',
    title: 'Icons',
    isActive: false,
    level: 0,
  },
  {
    route: 'data-types',
    title: 'Data types',
    isActive: false,
    level: 0,
  },
  {
    route: 'ui-components',
    title: 'UI Components',
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

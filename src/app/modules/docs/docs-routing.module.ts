import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocsRootComponent } from './components/docs-root/docs-root.component';
import { OverviewComponent } from './components/overview/overview.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { AccordionDocComponent } from './components/accordion-doc/accordion-doc.component';
import { AccordionItemDocComponent } from './components/accordion-item-doc/accordion-item-doc.component';
import { BarChartDocComponent } from './components/bar-chart-doc/bar-chart-doc.component';
import { ButtonDocComponent } from './components/button-doc/button-doc.component';
import { DataTypesComponent } from './components/data-types/data-types.component';
import { CheckboxDocComponent } from './components/checkbox-doc/checkbox-doc.component';
import { DatePickerDocComponent } from './components/date-picker-doc/date-picker-doc.component';
import { DropdownDocComponent } from './components/dropdown-doc/dropdown-doc.component';
import { FilePickerDocComponent } from './components/file-picker-doc/file-picker-doc.component';
import { InputDocComponent } from './components/input-doc/input-doc.component';
import { LineChartDocComponent } from './components/line-chart-doc/line-chart-doc.component';
import { ListDocComponent } from './components/list-doc/list-doc.component';
import { LookupDocComponent } from './components/lookup-doc/lookup-doc.component';
import { NotificationDocComponent } from './components/notification-doc/notification-doc.component';
import { NumberboxDocComponent } from './components/numberbox-doc/numberbox-doc.component';
import { PieChartDocComponent } from './components/pie-chart-doc/pie-chart-doc.component';
import { PopupDocComponent } from './components/popup-doc/popup-doc.component';
import { RadioButtonDocComponent } from './components/radio-button-doc/radio-button-doc.component';
import { RadioGroupDocComponent } from './components/radio-group-doc/radio-group-doc.component';
import { ScrollLayoutDocComponent } from './components/scroll-layout-doc/scroll-layout-doc.component';
import { SlideToggleDocComponent } from './components/slide-toggle-doc/slide-toggle-doc.component';
import { SliderDocComponent } from './components/slider-doc/slider-doc.component';
import { SliderItemDocComponent } from './components/slider-item-doc/slider-item-doc.component';
import { SpinnerDocComponent } from './components/spinner-doc/spinner-doc.component';
import { TableDocComponent } from './components/table-doc/table-doc.component';
import { TabDocComponent } from './components/tab-doc/tab-doc.component';
import { TabsDocComponent } from './components/tabs-doc/tabs-doc.component';
import { TextareaDocComponent } from './components/textarea-doc/textarea-doc.component';
import { TooltipDocComponent } from './components/tooltip-doc/tooltip-doc.component';

const routes: Routes = [
  {
    path: '',
    component: DocsRootComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'overview' },
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'getting-started',
        component: GettingStartedComponent,
      },
      {
        path: 'data-types',
        component: DataTypesComponent,
      },
      {
        path: 'accordion',
        component: AccordionDocComponent,
      },
      {
        path: 'accordion-item',
        component: AccordionItemDocComponent,
      },
      {
        path: 'bar-chart',
        component: BarChartDocComponent,
      },
      {
        path: 'button',
        component: ButtonDocComponent,
      },
      {
        path: 'checkbox',
        component: CheckboxDocComponent,
      },
      {
        path: 'date-picker',
        component: DatePickerDocComponent,
      },
      {
        path: 'dropdown',
        component: DropdownDocComponent,
      },
      {
        path: 'file-picker',
        component: FilePickerDocComponent,
      },
      {
        path: 'input',
        component: InputDocComponent,
      },
      {
        path: 'line-chart',
        component: LineChartDocComponent,
      },
      {
        path: 'list',
        component: ListDocComponent,
      },
      {
        path: 'lookup',
        component: LookupDocComponent,
      },
      {
        path: 'notification',
        component: NotificationDocComponent,
      },
      {
        path: 'numberbox',
        component: NumberboxDocComponent,
      },
      {
        path: 'pie-chart',
        component: PieChartDocComponent,
      },
      {
        path: 'popup',
        component: PopupDocComponent,
      },
      {
        path: 'radio-button',
        component: RadioButtonDocComponent,
      },
      {
        path: 'radio-group',
        component: RadioGroupDocComponent,
      },
      {
        path: 'scroll-layout',
        component: ScrollLayoutDocComponent,
      },
      {
        path: 'slide-toggle',
        component: SlideToggleDocComponent,
      },
      {
        path: 'slider',
        component: SliderDocComponent,
      },
      {
        path: 'slider-item',
        component: SliderItemDocComponent,
      },
      {
        path: 'spinner',
        component: SpinnerDocComponent,
      },
      {
        path: 'table',
        component: TableDocComponent,
      },
      {
        path: 'tabs',
        component: TabsDocComponent,
      },
      {
        path: 'tab',
        component: TabDocComponent,
      },
      {
        path: 'textarea',
        component: TextareaDocComponent,
      },
      {
        path: 'tooltip',
        component: TooltipDocComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}

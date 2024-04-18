import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemosRoutingModule } from './demos-routing.module';
import { DemosMenuComponent } from './components/demos-menu/demos-menu.component';
import { MariiaUiModule } from 'projects/mariia-ui/src/public-api';
import { DemosRootComponent } from './components/demos-root/demos-root.component';
import { AccordionDemoComponent } from './components/accordion-demo/accordion-demo.component';
import { CodeComponent } from '../shared/components/code/code.component';
import { DemoPageComponent } from './components/demo-page/demo-page.component';
import { BarChartDemoComponent } from './components/bar-chart-demo/bar-chart-demo.component';
import { ButtonDemoComponent } from './components/button-demo/button-demo.component';
import { CheckboxDemoComponent } from './components/checkbox-demo/checkbox-demo.component';
import { DatePickerDemoComponent } from './components/date-picker-demo/date-picker-demo.component';
import { DropdownDemoComponent } from './components/dropdown-demo/dropdown-demo.component';
import { FilePickerDemoComponent } from './components/file-picker-demo/file-picker-demo.component';
import { InputDemoComponent } from './components/input-demo/input-demo.component';
import { LineChartDemoComponent } from './components/line-chart-demo/line-chart-demo.component';
import { ListDemoComponent } from './components/list-demo/list-demo.component';
import { LookupDemoComponent } from './components/lookup-demo/lookup-demo.component';
import { NotificationDemoComponent } from './components/notification-demo/notification-demo.component';
import { NumberboxDemoComponent } from './components/numberbox-demo/numberbox-demo.component';
import { PieChartDemoComponent } from './components/pie-chart-demo/pie-chart-demo.component';
import { PopupDemoComponent } from './components/popup-demo/popup-demo.component';
import { RadioGroupDemoComponent } from './components/radio-group-demo/radio-group-demo.component';
import { ScrollLayoutDemoComponent } from './components/scroll-layout-demo/scroll-layout-demo.component';
import { SlideToggleDemoComponent } from './components/slide-toggle-demo/slide-toggle-demo.component';
import { SliderDemoComponent } from './components/slider-demo/slider-demo.component';
import { SpinnerDemoComponent } from './components/spinner-demo/spinner-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';
import { TabsDemoComponent } from './components/tabs-demo/tabs-demo.component';
import { TextareaDemoComponent } from './components/textarea-demo/textarea-demo.component';
import { TooltipDemoComponent } from './components/tooltip-demo/tooltip-demo.component';

@NgModule({
  declarations: [
    DemosMenuComponent,
    DemosRootComponent,
    AccordionDemoComponent,
    DemoPageComponent,
    BarChartDemoComponent,
    ButtonDemoComponent,
    CheckboxDemoComponent,
    DatePickerDemoComponent,
    DropdownDemoComponent,
    FilePickerDemoComponent,
    InputDemoComponent,
    LineChartDemoComponent,
    ListDemoComponent,
    LookupDemoComponent,
    NotificationDemoComponent,
    NumberboxDemoComponent,
    PieChartDemoComponent,
    PopupDemoComponent,
    RadioGroupDemoComponent,
    ScrollLayoutDemoComponent,
    SlideToggleDemoComponent,
    SliderDemoComponent,
    SpinnerDemoComponent,
    TableDemoComponent,
    TabsDemoComponent,
    TextareaDemoComponent,
    TooltipDemoComponent,
  ],
  imports: [CommonModule, DemosRoutingModule, MariiaUiModule, CodeComponent],
})
export class DemosModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsRootComponent } from './components/docs-root/docs-root.component';
import { DocsMenuComponent } from './components/docs-menu/docs-menu.component';
import { OverviewComponent } from './components/overview/overview.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { MariiaUiModule } from 'projects/mariia-ui/src/public-api';
import { AccordionDocComponent } from './components/accordion-doc/accordion-doc.component';
import { AccordionItemDocComponent } from './components/accordion-item-doc/accordion-item-doc.component';
import { BarChartDocComponent } from './components/bar-chart-doc/bar-chart-doc.component';
import { ButtonDocComponent } from './components/button-doc/button-doc.component';
import { DataTypesComponent } from './components/data-types/data-types.component';
import { DocPageComponent } from './components/doc-page/doc-page.component';
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
import { TabsDocComponent } from './components/tabs-doc/tabs-doc.component';
import { TabDocComponent } from './components/tab-doc/tab-doc.component';
import { TextareaDocComponent } from './components/textarea-doc/textarea-doc.component';
import { TooltipDocComponent } from './components/tooltip-doc/tooltip-doc.component';
import { CodeComponent } from '../shared/components/code/code.component';
import { IconsDocComponent } from './components/icons-doc/icons-doc.component';
import { TranslationComponent } from './components/translation/translation.component';

@NgModule({
  declarations: [
    DocsRootComponent,
    DocsMenuComponent,
    OverviewComponent,
    GettingStartedComponent,
    AccordionDocComponent,
    AccordionItemDocComponent,
    BarChartDocComponent,
    ButtonDocComponent,
    DataTypesComponent,
    DocPageComponent,
    CheckboxDocComponent,
    DatePickerDocComponent,
    DropdownDocComponent,
    FilePickerDocComponent,
    InputDocComponent,
    LineChartDocComponent,
    ListDocComponent,
    LookupDocComponent,
    NotificationDocComponent,
    NumberboxDocComponent,
    PieChartDocComponent,
    PopupDocComponent,
    RadioButtonDocComponent,
    RadioGroupDocComponent,
    ScrollLayoutDocComponent,
    SlideToggleDocComponent,
    SliderDocComponent,
    SliderItemDocComponent,
    SpinnerDocComponent,
    TableDocComponent,
    TabsDocComponent,
    TabDocComponent,
    TextareaDocComponent,
    TooltipDocComponent,
    IconsDocComponent,
    TranslationComponent,
  ],
  imports: [CommonModule, DocsRoutingModule, MariiaUiModule, CodeComponent],
})
export class DocsModule {}

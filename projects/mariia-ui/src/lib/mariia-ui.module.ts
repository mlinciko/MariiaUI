import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MariiaUiComponent } from './mariia-ui.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { XmarkIconComponent } from './icons/xmark-icon/xmark-icon.component';
import { ShowErrorPipe } from './pipes/show-error/show-error.pipe';
import { ErrorMessagePipe } from './pipes/error-message/error-message.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ChevronUpIconComponent } from './icons/chevron-up-icon/chevron-up-icon.component';
import { BaseIcon } from './icons/base-icon/base-icon.directive';
import { ChevronDownIconComponent } from './icons/chevron-down-icon/chevron-down-icon.component';
import { TableComponent } from './components/table/table.component';
import { AddIconComponent } from './icons/add-icon/add-icon.component';
import { EditIconComponent } from './icons/edit-icon/edit-icon.component';
import { DeleteIconComponent } from './icons/delete-icon/delete-icon.component';
import { SaveIconComponent } from './icons/save-icon/save-icon.component';
import { CancelIconComponent } from './icons/cancel-icon/cancel-icon.component';
import { CellValuePipe } from './pipes/cell-value/cell-value.pipe';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CheckIconComponent } from './icons/check-icon/check-icon.component';
import { FilterIconComponent } from './icons/filter-icon/filter-icon.component';
import { HeaderFilterComponent } from './components/table/header-filter/header-filter.component';
import { CheckboxLabelPipe } from './pipes/checkbox-label/checkbox-label.pipe';
import { ArrowUpIconComponent } from './icons/arrow-up-icon/arrow-up-icon.component';
import { ArrowDownIconComponent } from './icons/arrow-down-icon/arrow-down-icon.component';
import { HeaderSortingComponent } from './components/table/header-sorting/header-sorting.component';
import { ArrowUpDownIconComponent } from './icons/arrow-up-down-icon/arrow-up-down-icon.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab/tab.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { NotificationComponent } from './components/notification/notification.component';
import { InitializeService } from './services/initialize/initialize.service';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ButtonComponent } from './components/button/button.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { RadioButtonComponent } from './components/radio-group/radio-button/radio-button.component';
import { NumberboxComponent } from './components/numberbox/numberbox.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { CalendarIconComponent } from './icons/calendar-icon/calendar-icon.component';
import { CalendarComponent } from './components/date-picker/calendar/calendar.component';
import { ChevronLeftIconComponent } from './icons/chevron-left-icon/chevron-left-icon.component';
import { ChevronRightIconComponent } from './icons/chevron-right-icon/chevron-right-icon.component';
import { CircleChevronLeftIconComponent } from './icons/circle-chevron-left-icon/circle-chevron-left-icon.component';
import { CircleChevronRightIconComponent } from './icons/circle-chevron-right-icon/circle-chevron-right-icon.component';
import { IsCurrentDatePipe } from './pipes/is-current-date/is-current-date.pipe';
import { IsSelectedDatePipe } from './pipes/is-selected-date/is-selected-date.pipe';
import { ListComponent } from './components/list/list.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionItemComponent } from './components/accordion/accordion-item/accordion-item.component';
import { SpinnerIconComponent } from './icons/spinner-icon/spinner-icon.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerLineIconComponent } from './icons/spinner-line-icon/spinner-line-icon.component';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { LookupComponent } from './components/lookup/lookup.component';
import { FilePickerComponent } from './components/file-picker/file-picker.component';
import { ScrollLayoutComponent } from './components/scroll-layout/scroll-layout.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderItemComponent } from './components/slider/slider-item/slider-item.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PaginationComponent } from './components/table/pagination/pagination.component';
import { PopupComponent } from './components/popup/popup.component';

function initializeLib(initializeService: InitializeService) {
  return () => initializeService.renderInitialComponents();
}

@NgModule({
  declarations: [
    MariiaUiComponent,
    InputComponent,
    XmarkIconComponent,
    ShowErrorPipe,
    ErrorMessagePipe,
    DropdownComponent,
    ChevronUpIconComponent,
    BaseIcon,
    ChevronDownIconComponent,
    TableComponent,
    AddIconComponent,
    EditIconComponent,
    DeleteIconComponent,
    SaveIconComponent,
    CancelIconComponent,
    CellValuePipe,
    CheckboxComponent,
    CheckIconComponent,
    FilterIconComponent,
    HeaderFilterComponent,
    CheckboxLabelPipe,
    ArrowUpIconComponent,
    ArrowDownIconComponent,
    HeaderSortingComponent,
    ArrowUpDownIconComponent,
    TabsComponent,
    TabComponent,
    PieChartComponent,
    NotificationComponent,
    TextareaComponent,
    ButtonComponent,
    SlideToggleComponent,
    RadioGroupComponent,
    RadioButtonComponent,
    NumberboxComponent,
    DatePickerComponent,
    CalendarIconComponent,
    CalendarComponent,
    ChevronLeftIconComponent,
    ChevronRightIconComponent,
    CircleChevronLeftIconComponent,
    CircleChevronRightIconComponent,
    IsCurrentDatePipe,
    IsSelectedDatePipe,
    ListComponent,
    AccordionComponent,
    AccordionItemComponent,
    SpinnerIconComponent,
    SpinnerComponent,
    SpinnerLineIconComponent,
    TooltipDirective,
    LookupComponent,
    FilePickerComponent,
    ScrollLayoutComponent,
    SliderComponent,
    SliderItemComponent,
    BarChartComponent,
    LineChartComponent,
    PaginationComponent,
    PopupComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    MariiaUiComponent,
    InputComponent,
    DropdownComponent,
    XmarkIconComponent,
    ChevronDownIconComponent,
    TableComponent,
    ChevronUpIconComponent,
    AddIconComponent,
    EditIconComponent,
    DeleteIconComponent,
    SaveIconComponent,
    CancelIconComponent,
    CellValuePipe,
    CheckboxComponent,
    CheckIconComponent,
    FilterIconComponent,
    ArrowUpIconComponent,
    ArrowDownIconComponent,
    ArrowUpDownIconComponent,
    TabsComponent,
    TabComponent,
    PieChartComponent,
    TextareaComponent,
    ButtonComponent,
    SlideToggleComponent,
    RadioGroupComponent,
    RadioButtonComponent,
    NumberboxComponent,
    DatePickerComponent,
    ChevronLeftIconComponent,
    ChevronRightIconComponent,
    CalendarIconComponent,
    ListComponent,
    AccordionComponent,
    AccordionItemComponent,
    SpinnerIconComponent,
    SpinnerComponent,
    TooltipDirective,
    LookupComponent,
    FilePickerComponent,
    ScrollLayoutComponent,
    SliderComponent,
    SliderItemComponent,
    BarChartComponent,
    LineChartComponent,
    PopupComponent,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeLib,
      deps: [InitializeService],
      multi: true,
    },
  ],
})
export class MariiaUiModule {}

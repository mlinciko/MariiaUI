import { NgModule } from '@angular/core';
import { MariiaUiComponent } from './mariia-ui.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { XmarkComponent } from './icons/xmark/xmark.component';
import { ShowErrorPipe } from './pipes/show-error/show-error.pipe';
import { ErrorMessagePipe } from './pipes/error-message/error-message.pipe';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ChevronUpComponent } from './icons/chevron-up/chevron-up.component';
import { BaseIcon } from './icons/base-icon/base-icon.directive';
import { ChevronDownComponent } from './icons/chevron-down/chevron-down.component';

@NgModule({
  declarations: [
    MariiaUiComponent,
    TextFieldComponent,
    XmarkComponent,
    ShowErrorPipe,
    ErrorMessagePipe,
    DropdownComponent,
    ChevronUpComponent,
    BaseIcon,
    ChevronDownComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    MariiaUiComponent,
    TextFieldComponent,
    DropdownComponent,
    XmarkComponent,
  ],
})
export class MariiaUiModule {}

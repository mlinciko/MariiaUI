import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslationService } from '../../services/translation/translation.service';

const messages: Record<string, string> = {};

@Pipe({
  name: 'errorMessage',
})
export class ErrorMessagePipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(control: FormControl): string {
    const errorKey = Object.keys(control.errors || {})[0];
    const error = control.errors?.[errorKey];

    if (error) {
      return messages[errorKey] || this.getDefaultErrorMessage(errorKey, error);
    }
    return '';
  }

  getDefaultErrorMessage(key: string, error: any): string {
    switch (key) {
      case 'required':
        return this.translationService.translate('validators.errors.required');
      case 'min':
        return this.translationService.translate(
          'validators.errors.min',
          error
        );
      case 'max':
        return this.translationService.translate(
          'validators.errors.max',
          error
        );
      case 'requiredTrue':
        return this.translationService.translate(
          'validators.errors.requiredTrue'
        );
      case 'email':
        return this.translationService.translate('validators.errors.email');
      case 'minlength':
        return this.translationService.translate(
          'validators.errors.minLength',
          error
        );
      case 'maxlength':
        return this.translationService.translate(
          'validators.errors.maxLength',
          error
        );
      case 'pattern':
        return this.translationService.translate(
          'validators.errors.pattern',
          error
        );
      default:
        return '';
    }
  }
}

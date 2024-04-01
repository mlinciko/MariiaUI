import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  EMAIL_ERROR,
  MAX_ERROR,
  MAX_LENGTH_ERROR,
  MIN_ERROR,
  MIN_LENGTH_ERROR,
  PATTERN_ERROR,
  REQUIRED_ERROR,
  REQUIRED_TRUE_ERROR,
} from './default-messages';

@Pipe({
  name: 'errorMessage',
})
export class ErrorMessagePipe implements PipeTransform {
  transform(control: FormControl, messages: Record<string, string>): string {
    const errorKey = Object.keys(control.errors || {})[0];
    const error = control.errors?.[errorKey];

    if (error) {
      return messages[errorKey] || getDefaultErrorMessage(errorKey, error);
    }
    return '';
  }
}

function getDefaultErrorMessage(key: string, error: any): string {
  console.log(key, error);
  switch (key) {
    case 'required':
      return REQUIRED_ERROR;
    case 'min':
      return MIN_ERROR(error as number);
    case 'max':
      return MAX_ERROR(error as number);
    case 'requiredTrue':
      return REQUIRED_TRUE_ERROR;
    case 'email':
      return EMAIL_ERROR;
    case 'minlength':
      return MIN_LENGTH_ERROR(error.requiredLength as number);
    case 'maxlength':
      return MAX_LENGTH_ERROR(error.requiredLength as number);
    case 'pattern':
      return PATTERN_ERROR;
    default:
      return '';
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'showError',
  pure: false,
})
export class ShowErrorPipe implements PipeTransform {
  transform(control: FormControl): boolean {
    const hasErrors = !!Object.keys(control.errors || {}).length;
    return (control.dirty || control.touched || hasErrors) && control.invalid;
  }
}

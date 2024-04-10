import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isCurrentDate',
})
export class IsCurrentDatePipe implements PipeTransform {
  transform(value: Date): unknown {
    return new Date(value).toDateString() === new Date().toDateString();
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isSelectedDate',
})
export class IsSelectedDatePipe implements PipeTransform {
  transform(value: { day: Date; selectedDate: Date | null }): unknown {
    return value.day.toDateString() === value.selectedDate?.toDateString();
  }
}

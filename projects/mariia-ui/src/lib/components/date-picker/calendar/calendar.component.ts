import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'mui-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {
  @Input() selectedDate: Date | null = null;
  @Output() dateSelected: EventEmitter<Date> = new EventEmitter();

  weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  currentDate: Date = new Date();

  daysInMonth: Date[] = [];
  currentMonth: Date = new Date(
    this.currentDate.getFullYear(),
    this.currentDate.getMonth(),
    1
  );
  firstDayIndex = 0;

  ngOnInit(): void {
    if (this.selectedDate) {
      this.currentMonth = new Date(
        this.selectedDate.getFullYear(),
        this.selectedDate.getMonth(),
        1
      );
    }

    this.generateCalendar();
  }

  generateCalendar(): void {
    this.firstDayIndex = this.currentMonth.getDay();
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    this.daysInMonth = [];
    for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
      this.daysInMonth.push(new Date(day));
    }
  }

  nextMonth(): void {
    if (this.currentMonth.getMonth() == 11) {
      this.currentMonth = new Date(this.currentMonth.getFullYear() + 1, 0, 1);
    } else {
      this.currentMonth = new Date(
        this.currentMonth.getFullYear(),
        this.currentMonth.getMonth() + 1,
        1
      );
    }

    this.generateCalendar();
  }

  nextYear(): void {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear() + 1,
      this.currentMonth.getMonth(),
      1
    );

    this.generateCalendar();
  }

  prevMonth(): void {
    if (this.currentMonth.getMonth() == 0) {
      this.currentMonth = new Date(this.currentMonth.getFullYear() - 1, 11, 1);
    } else {
      this.currentMonth = new Date(
        this.currentMonth.getFullYear(),
        this.currentMonth.getMonth() - 1,
        1
      );
    }

    this.generateCalendar();
  }

  prevYear(): void {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear() - 1,
      this.currentMonth.getMonth(),
      1
    );

    this.generateCalendar();
  }

  selectDate(date: Date): void {
    this.selectedDate = date;
    this.dateSelected.emit(date);
  }

  get currentMonthName(): string {
    return this.months[this.currentMonth.getMonth()];
  }
}

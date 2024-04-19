import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TranslationService } from '../../../services/translation/translation.service';

@Component({
  selector: 'mui-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {
  @Input() selectedDate: Date | null = null;
  @Output() dateSelected: EventEmitter<Date> = new EventEmitter();

  constructor(private trsnlationService: TranslationService) {}

  weekDays = [
    this.trsnlationService.translate('calendar.days.monday'),
    this.trsnlationService.translate('calendar.days.tuesday'),
    this.trsnlationService.translate('calendar.days.wednesday'),
    this.trsnlationService.translate('calendar.days.thursday'),
    this.trsnlationService.translate('calendar.days.friday'),
    this.trsnlationService.translate('calendar.days.saturday'),
    this.trsnlationService.translate('calendar.days.sunday'),
  ];
  months = [
    this.trsnlationService.translate('calendar.months.january'),
    this.trsnlationService.translate('calendar.months.february'),
    this.trsnlationService.translate('calendar.months.march'),
    this.trsnlationService.translate('calendar.months.april'),
    this.trsnlationService.translate('calendar.months.may'),
    this.trsnlationService.translate('calendar.months.june'),
    this.trsnlationService.translate('calendar.months.july'),
    this.trsnlationService.translate('calendar.months.august'),
    this.trsnlationService.translate('calendar.months.september'),
    this.trsnlationService.translate('calendar.months.october'),
    this.trsnlationService.translate('calendar.months.november'),
    this.trsnlationService.translate('calendar.months.december'),
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

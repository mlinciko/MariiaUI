import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerDocComponent } from './date-picker-doc.component';

describe('DatePickerDocComponent', () => {
  let component: DatePickerDocComponent;
  let fixture: ComponentFixture<DatePickerDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatePickerDocComponent]
    });
    fixture = TestBed.createComponent(DatePickerDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

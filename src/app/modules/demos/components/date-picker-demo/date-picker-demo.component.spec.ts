import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerDemoComponent } from './date-picker-demo.component';

describe('DatePickerDemoComponent', () => {
  let component: DatePickerDemoComponent;
  let fixture: ComponentFixture<DatePickerDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatePickerDemoComponent]
    });
    fixture = TestBed.createComponent(DatePickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

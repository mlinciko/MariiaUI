import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleChevronLeftIconComponent } from './circle-chevron-left-icon.component';

describe('CircleChevronLeftIconComponent', () => {
  let component: CircleChevronLeftIconComponent;
  let fixture: ComponentFixture<CircleChevronLeftIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleChevronLeftIconComponent]
    });
    fixture = TestBed.createComponent(CircleChevronLeftIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

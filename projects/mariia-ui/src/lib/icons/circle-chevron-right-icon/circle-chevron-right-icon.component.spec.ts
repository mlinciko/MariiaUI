import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleChevronRightIconComponent } from './circle-chevron-right-icon.component';

describe('CircleChevronRightIconComponent', () => {
  let component: CircleChevronRightIconComponent;
  let fixture: ComponentFixture<CircleChevronRightIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleChevronRightIconComponent]
    });
    fixture = TestBed.createComponent(CircleChevronRightIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

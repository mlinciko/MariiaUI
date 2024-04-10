import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerLineIconComponent } from './spinner-line-icon.component';

describe('SpinnerLineIconComponent', () => {
  let component: SpinnerLineIconComponent;
  let fixture: ComponentFixture<SpinnerLineIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerLineIconComponent]
    });
    fixture = TestBed.createComponent(SpinnerLineIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

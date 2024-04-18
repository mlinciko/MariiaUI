import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerDocComponent } from './spinner-doc.component';

describe('SpinnerDocComponent', () => {
  let component: SpinnerDocComponent;
  let fixture: ComponentFixture<SpinnerDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerDocComponent]
    });
    fixture = TestBed.createComponent(SpinnerDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

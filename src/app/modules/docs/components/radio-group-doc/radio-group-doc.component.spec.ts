import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupDocComponent } from './radio-group-doc.component';

describe('RadioGroupDocComponent', () => {
  let component: RadioGroupDocComponent;
  let fixture: ComponentFixture<RadioGroupDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioGroupDocComponent]
    });
    fixture = TestBed.createComponent(RadioGroupDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

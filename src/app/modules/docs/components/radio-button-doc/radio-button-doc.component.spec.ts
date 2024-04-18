import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonDocComponent } from './radio-button-doc.component';

describe('RadioButtonDocComponent', () => {
  let component: RadioButtonDocComponent;
  let fixture: ComponentFixture<RadioButtonDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioButtonDocComponent]
    });
    fixture = TestBed.createComponent(RadioButtonDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

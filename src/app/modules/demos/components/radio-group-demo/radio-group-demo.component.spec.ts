import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupDemoComponent } from './radio-group-demo.component';

describe('RadioGroupDemoComponent', () => {
  let component: RadioGroupDemoComponent;
  let fixture: ComponentFixture<RadioGroupDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioGroupDemoComponent]
    });
    fixture = TestBed.createComponent(RadioGroupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDemoComponent } from './input-demo.component';

describe('InputDemoComponent', () => {
  let component: InputDemoComponent;
  let fixture: ComponentFixture<InputDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputDemoComponent]
    });
    fixture = TestBed.createComponent(InputDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberboxDemoComponent } from './numberbox-demo.component';

describe('NumberboxDemoComponent', () => {
  let component: NumberboxDemoComponent;
  let fixture: ComponentFixture<NumberboxDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberboxDemoComponent]
    });
    fixture = TestBed.createComponent(NumberboxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

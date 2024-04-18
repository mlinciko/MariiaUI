import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDemoComponent } from './accordion-demo.component';

describe('AccordionDemoComponent', () => {
  let component: AccordionDemoComponent;
  let fixture: ComponentFixture<AccordionDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionDemoComponent]
    });
    fixture = TestBed.createComponent(AccordionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDocComponent } from './accordion-doc.component';

describe('AccordionDocComponent', () => {
  let component: AccordionDocComponent;
  let fixture: ComponentFixture<AccordionDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionDocComponent]
    });
    fixture = TestBed.createComponent(AccordionDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

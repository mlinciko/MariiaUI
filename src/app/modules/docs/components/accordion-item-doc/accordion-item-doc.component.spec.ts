import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItemDocComponent } from './accordion-item-doc.component';

describe('AccordionItemDocComponent', () => {
  let component: AccordionItemDocComponent;
  let fixture: ComponentFixture<AccordionItemDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionItemDocComponent]
    });
    fixture = TestBed.createComponent(AccordionItemDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDocComponent } from './tooltip-doc.component';

describe('TooltipDocComponent', () => {
  let component: TooltipDocComponent;
  let fixture: ComponentFixture<TooltipDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipDocComponent]
    });
    fixture = TestBed.createComponent(TooltipDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

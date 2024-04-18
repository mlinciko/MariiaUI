import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleDocComponent } from './slide-toggle-doc.component';

describe('SlideToggleDocComponent', () => {
  let component: SlideToggleDocComponent;
  let fixture: ComponentFixture<SlideToggleDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideToggleDocComponent]
    });
    fixture = TestBed.createComponent(SlideToggleDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleDemoComponent } from './slide-toggle-demo.component';

describe('SlideToggleDemoComponent', () => {
  let component: SlideToggleDemoComponent;
  let fixture: ComponentFixture<SlideToggleDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideToggleDemoComponent]
    });
    fixture = TestBed.createComponent(SlideToggleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDemoComponent } from './slider-demo.component';

describe('SliderDemoComponent', () => {
  let component: SliderDemoComponent;
  let fixture: ComponentFixture<SliderDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderDemoComponent]
    });
    fixture = TestBed.createComponent(SliderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDocComponent } from './slider-doc.component';

describe('SliderDocComponent', () => {
  let component: SliderDocComponent;
  let fixture: ComponentFixture<SliderDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderDocComponent]
    });
    fixture = TestBed.createComponent(SliderDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

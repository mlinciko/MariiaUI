import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderItemDocComponent } from './slider-item-doc.component';

describe('SliderItemDocComponent', () => {
  let component: SliderItemDocComponent;
  let fixture: ComponentFixture<SliderItemDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderItemDocComponent]
    });
    fixture = TestBed.createComponent(SliderItemDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

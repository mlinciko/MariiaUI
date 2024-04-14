import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderItemComponent } from './slider-item.component';

describe('SliderItemComponent', () => {
  let component: SliderItemComponent;
  let fixture: ComponentFixture<SliderItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderItemComponent]
    });
    fixture = TestBed.createComponent(SliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowUpDownIconComponent } from './arrow-up-down-icon.component';

describe('ArrowUpDownIconComponent', () => {
  let component: ArrowUpDownIconComponent;
  let fixture: ComponentFixture<ArrowUpDownIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrowUpDownIconComponent]
    });
    fixture = TestBed.createComponent(ArrowUpDownIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

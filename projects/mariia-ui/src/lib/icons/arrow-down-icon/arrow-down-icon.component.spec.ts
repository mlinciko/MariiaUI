import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowDownIconComponent } from './arrow-down-icon.component';

describe('ArrowDownIconComponent', () => {
  let component: ArrowDownIconComponent;
  let fixture: ComponentFixture<ArrowDownIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrowDownIconComponent]
    });
    fixture = TestBed.createComponent(ArrowDownIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

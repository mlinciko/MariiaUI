import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevronRightIconComponent } from './chevron-right-icon.component';

describe('ChevronRightIconComponent', () => {
  let component: ChevronRightIconComponent;
  let fixture: ComponentFixture<ChevronRightIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChevronRightIconComponent]
    });
    fixture = TestBed.createComponent(ChevronRightIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

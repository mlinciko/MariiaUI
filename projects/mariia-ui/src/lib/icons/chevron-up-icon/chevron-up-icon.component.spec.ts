import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevronUpIconComponent } from './chevron-up-icon.component';

describe('ChevronUpIconComponent', () => {
  let component: ChevronUpIconComponent;
  let fixture: ComponentFixture<ChevronUpIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChevronUpIconComponent],
    });
    fixture = TestBed.createComponent(ChevronUpIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

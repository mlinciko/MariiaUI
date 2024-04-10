import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSortingComponent } from './header-sorting.component';

describe('HeaderSortingComponent', () => {
  let component: HeaderSortingComponent;
  let fixture: ComponentFixture<HeaderSortingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderSortingComponent]
    });
    fixture = TestBed.createComponent(HeaderSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

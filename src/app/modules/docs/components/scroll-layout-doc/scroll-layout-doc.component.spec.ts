import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollLayoutDocComponent } from './scroll-layout-doc.component';

describe('ScrollLayoutDocComponent', () => {
  let component: ScrollLayoutDocComponent;
  let fixture: ComponentFixture<ScrollLayoutDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollLayoutDocComponent]
    });
    fixture = TestBed.createComponent(ScrollLayoutDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

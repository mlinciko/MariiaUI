import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollLayoutDemoComponent } from './scroll-layout-demo.component';

describe('ScrollLayoutDemoComponent', () => {
  let component: ScrollLayoutDemoComponent;
  let fixture: ComponentFixture<ScrollLayoutDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollLayoutDemoComponent]
    });
    fixture = TestBed.createComponent(ScrollLayoutDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

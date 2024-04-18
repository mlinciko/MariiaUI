import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDemoComponent } from './popup-demo.component';

describe('PopupDemoComponent', () => {
  let component: PopupDemoComponent;
  let fixture: ComponentFixture<PopupDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupDemoComponent]
    });
    fixture = TestBed.createComponent(PopupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

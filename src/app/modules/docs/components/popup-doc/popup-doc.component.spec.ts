import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDocComponent } from './popup-doc.component';

describe('PopupDocComponent', () => {
  let component: PopupDocComponent;
  let fixture: ComponentFixture<PopupDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupDocComponent]
    });
    fixture = TestBed.createComponent(PopupDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

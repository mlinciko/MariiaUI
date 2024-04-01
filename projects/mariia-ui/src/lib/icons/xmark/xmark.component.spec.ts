import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmarkComponent } from './xmark.component';

describe('XmarkComponent', () => {
  let component: XmarkComponent;
  let fixture: ComponentFixture<XmarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XmarkComponent]
    });
    fixture = TestBed.createComponent(XmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
